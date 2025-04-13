// { date: YYYY-MM-DD, location: "Foo Bar", type: "home" },
// { date: YYYY-MM-DD, location: "Baz", type: "golf" }

import {FileAttachment} from "observablehq:stdlib";
import {getDateRange} from "../util.js";

const golf = await FileAttachment("data/golf_dates.csv").csv({typed: true});
const home = await FileAttachment("data/home_visits.csv").csv({typed: true});

const output = [];

for (const e of golf) {
  output.push({
    date: new Date(g.date).toISOString().split('T')[0],
    location: g.location,
    type: 'golf'
  })
}

for (const e of home) {
  for (const date of getDateRange(g.start_date, g.end_date)) {
    output.push({
      date: date.toISOString().split('T')[0],
      location: g.location,
      type: 'home'
    })  
  }
}

output.sort((a, b) => a.date.localeCompare(b.date));

process.stdout.write(JSON.stringify(output));
