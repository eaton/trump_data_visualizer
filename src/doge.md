# Infrastructure

## DOGE and related infrastructrure "modernization" data

## Agencies

```js
const data = await FileAttachment("./data/agencies.json").json();
view(Inputs.table(data));
```

## Aliases

```js
const data = await FileAttachment("./data/aliases.json").json();
view(Inputs.table(data));
```

## Cases

```js
const data = await FileAttachment("./data/cases.json").json();
view(Inputs.table(data));
```

## Details

```js
const data = await FileAttachment("./data/details.json").json();
view(Inputs.table(data));
```


## Events

```js
const data = await FileAttachment("./data/events.json").json();
view(Inputs.table(data));
```

## Onboard Docs

```js
const data = await FileAttachment("./data/onboard_docs.json").json();
view(Inputs.table(data));
```

## Roundups

```js
const data = await FileAttachment("./data/roundups.json").json();
view(Inputs.table(data));
```

## Systems

```js
const data = await FileAttachment("./data/systems.json").json();
view(Inputs.table(data));
```
