# Travel

```js
import {getDateRange} from "./util.js";

const golf = await FileAttachment("data/golf_dates.csv").csv({typed: true});
const home = await FileAttachment("data/home_visits.csv").csv({typed: true});

const data = [];

for (const e of home) {
  for (const date of getDateRange(e.start_date, e.end_date)) {
    data.push({
      date: date.toISOString().split('T')[0],
      location: e.location,
      type: 'home'
    })  
  }
}

for (const e of golf) {
  data.push({
    date: new Date(e.date).toISOString().split('T')[0],
    location: e.location,
    type: 'golf'
  })
}

data.sort((a, b) => a.date.localeCompare(b.date));
```

## Days Out-of-Office

${ Plot.plot({
  padding: 0,
  y: { tickFormat: Plot.formatMonth("en", "short") },
  marks: [
    Plot.cell(data, {
      x: (d) => new Date(d.date).getUTCDate(),
      y: (d) => new Date(d.date).getUTCMonth(),
      fill: "type",
      inset: 2
    }),
    Plot.tip(data, Plot.pointer({
      x: (d) => new Date(d.date).getUTCDate(),
      y: (d) => new Date(d.date).getUTCMonth(),
      title: d => d.location
    }))
  ]
})}

${ display(Inputs.table(data)) }
