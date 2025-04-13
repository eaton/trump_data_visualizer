# Gitmo

## Population data for Gitmo concentration camp

```js
const data = await FileAttachment("./data/gitmo_camp.csv").csv({typed: true});
```

${Plot.plot({
  marks: [
    Plot.lineY(data, {x: "date", y: "population"}),
    Plot.dot(data, {x: "date", y: "population"}),
    Plot.tip(data, Plot.pointer({
      x: "date",
      y: "population",
      title: (d) => ['"' + d.quote + '"', d.source].join("\n\n")
    }))
  ],
})}

${ view(Inputs.table(data)) }