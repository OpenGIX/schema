---
outline: deep
---

# OpenGIX Schema API

Example implementation

```yaml
# yaml-language-server: $schema=./schema/spec.json
apiVersion: gix.io/v1-beta
kind: Layers
meta:
  name: "GIX"
  labels: ["fr", "wine-maps"]
  description: "A GIS project to map the viticulture areas of France."
layers:
  - meta:
      name: "French Wine Regions"
      labels: ["france", "wine"]
    format: geojson,
    schemaType: "Winery"
    document:
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "type": "Point", "coordinates": [125.6, 10.1] },
      }
```

## apiVersion

### description

Type: `string`

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## kind

## meta

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

## layers
