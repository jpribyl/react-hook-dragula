# React Hook Dragula

[![npm version](https://badge.fury.io/js/react-hook-dragula.svg)](https://badge.fury.io/js/react-hook-dragula)

Lightweight, strongly typed package with almost no dependencies. It uses
Dragula and React Hooks to smoothly manage the DOM state. It also adds a
context store which allows you to pass the data back and forth between
`Dragula` and `React`.  take a look at the [example project]() or the [live
demo]() of the example project.

![Example of usage]()

## Install
```
yarn add react-hook-dragula
```

## Usage

### Initializing

```jsx
// Type for data which will be attached to dragula events
// Yours will be different.
type Fruit = {
  itemId: number;
  itemName: string;
}

type DraggableStore = {
  fruit: Fruit;
  fruits: Fruit[];
  setFruits: Dispatch<SetStateAction<Fruit[]>>;
}

const {
  Dragula,
  DragulaContainer,
  Draggable,
  DragulaHandle,
  useDraggableStore,
  useInternalStore,
  useDrake,
} = initializeDragula<DraggableStore>();
```

### Basic dragging

```jsx
<Dragula>
  <DragulaContainer>
    <Draggable>
      You can move these elements between these two containers
    </Draggable>
  </DragulaContainer>

  <DragulaContainer>
    <Draggable>
      There's also the possibility of moving elements around in the
      same container, changing their position
    </Draggable>
  </DragulaContainer>
</Dragula>
```

### Customizing Dragula options

```jsx
<Dragula
  options={{ moves: ({ container }) => !!container?.children.length > 1 }}
  onDrop={() => console.log('dragula drop event!')}
>
  <DragulaContainer>
    <Draggable>
      You can move these elements between these two containers
    </Draggable>
    <Draggable>
      There's also the possibility of moving elements around in the
      same container, changing their position
    </Draggable>
    <Draggable>
      Anyting can be moved around. That includes images, links, or any other
      nested elements.
    </Draggable>
  </DragulaContainer>

  <DragulaContainer>
    <Draggable>
      This element can't be moved until a second one is added into it's container
    </Draggable>
  </DragulaContainer>
</Dragula>
```


### Attaching data to Dragula store

```jsx
const [fruits, setFruits] = useState<Fruit[]>([
  { itemId: 1, itemName: 'apples' },
  { itemId: 2, itemName: 'oranges' },
  { itemId: 3, itemName: 'tomatoes' },
]);

<Dragula
  onDrop={({ el, source }) => {
      setFruits([...source.children].map(
        ({ draggableStore: { fruit } }) => draggableStore,
      ))

      console.log('Dragual drop event for: ', el.draggableStore.fruit.itemName)
  }}
>
  <DragulaContainer>
    {fruits.map(fruit => (
      <Draggable
        key={fruit.id}
        draggableStore={{
          fruit,
          fruits,
          setFruits,
        }}
      >
        <div>{fruit.itemName} - id: {fruit.id}</div>
      </Draggable>
    ))}
  </DragulaContainer>
</Dragula>
```

### Using Drake and InternalStore
```jsx
<Dragula
  options={{ moves: ({ el }) => !!el?.internalStore.isMouseOverHandle }}
>
  <DragulaContainer>
    <Draggable>
      <DragulaHandle>You can only drag this item by clicking on me!</DragulaHandle>
      <div>You can move these elements between these two containers</div>
    </Draggable>
    <Draggable>
      This item doesn't have a handle.. so it can't be moved at all!
    </Draggable>
  </DragulaContainer>
</Dragula>
```


## API

### Exported function
#### `initializeDragula` usage:

### Components
#### `Dragula` props:
#### `DragulaContainer` props:
#### `Draggable` props:
#### `DragulaHandle` props:

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
#### `options` `Object, optional`
- Sets [Dragula options](https://github.com/bevacqua/dragula#usage). 
- Default: Same as Dragula

#### `on<Event>` `Function, optional`:
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

#### `Other attributes`  `HTMLProps<HTMLDivElement>, optional`
- All other props passed into this component will be directly translated onto the react component
- This allows you to add css classes or other handlers, see usage examples above

### Custom Hooks
#### `useDraggableStore`
#### `useInternalStore`
#### `useDrake`
