# React Hook Dragula

[![npm version](https://badge.fury.io/js/react-hook-dragula.svg)](https://badge.fury.io/js/react-hook-dragula)

Lightweight, strongly typed package with almost no dependencies. It uses
Dragula and React Hooks to smoothly manage the DOM state.  For more details,
take a look at the [example project]()
 or the [live demo]() of the example project.

![Example of usage]()

## Install
```
yarn add react-hook-dragula
```

## Usage

### Basic dragging

```jsx
```

### Customizing Dragula options
```jsx
```


### Attaching data to Dragula store

```jsx
```

### Using Drake and InternalStore
```jsx
```


## API

### `DragulaContainer` props:

  onDrag,
  onDragEnd,
  onDrop,
  onCancel,
  onRemove,
  onShadow,
  onOver,
  onOut,
  onCloned,
  options = {},
  dependencyList = [],
  ...props
#### `options` Object, optional
- Sets [Dragula options](https://github.com/bevacqua/dragula#usage). 
- Default: Same as Dragula

#### `on<Event>` Function, optional:
- Sets [Drake onEvent](https://github.com/bevacqua/dragula/blob/master/readme.markdown#drakeon-events)
- Accepts all the same handlers as `Dragula`
- Params are all passed through with names
- For example: `<DragulaContainer onDrop={({ sibling }) => console.log( sibling )} />`

Event Name | Listener Arguments               | Event Description
-----------|----------------------------------|-------------------------------------------------------------------------------------
`drag`     | `el, source`                     | `el` was lifted from `source`
`dragend`  | `el`                             | Dragging event for `el` ended with either `cancel`, `remove`, or `drop`
`drop`     | `el, target, source, sibling`    | `el` was dropped into `target` before a `sibling` element, and originally came from `source`
`cancel`   | `el, container, source`          | `el` was being dragged but it got nowhere and went back into `container`, its last stable parent; `el` originally came from `source`
`remove`   | `el, container, source`          | `el` was being dragged but it got nowhere and it was removed from the DOM. Its last stable parent was `container`, and originally came from `source`
`shadow`   | `el, container, source`          | `el`, _the visual aid shadow_, was moved into `container`. May trigger many times as the position of `el` changes, even within the same `container`; `el` originally came from `source`
`over`     | `el, container, source`          | `el` is over `container`, and originally came from `source`
`out`      | `el, container, source`          | `el` was dragged out of `container` or dropped, and originally came from `source`
`cloned`   | `clone, original, type`          | DOM element `original` was cloned as `clone`, of `type` _(`'mirror'` or `'copy'`)_. Fired for mirror images and when `copy: true`

#### `Other attributes`  HTMLProps<HTMLDivElement> optional
- All other props passed into this component will be directly translated onto the react component
- This allows you to add css classes or other handlers, see usage examples above
