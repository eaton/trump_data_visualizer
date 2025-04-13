# Unemployment

```js
const data = await FileAttachment("./data/weekly_claims.csv").csv({typed: true});
```

${Plot.plot({
  marks: [
    Plot.lineY(data, {x: "Week Ending", y: "Initial Claims (SA)"}),
    Plot.dot(data, {x: "Week Ending", y: "Initial Claims (SA)"}),
    Plot.tip(data, Plot.pointer({
      x: "Week Ending",
      y: "Initial Claims (SA)",
      title: (d) => d["Initial Claims (SA)"]
    }))
  ]
})}

${ view(Inputs.table(data)) }
