import { DragulaOptions, Drake } from "dragula";
import {
  createContext,
  DependencyList,
  Dispatch,
  HTMLProps,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import reactDragula from "react-dragula";

type InternalStore = {
  isMouseOverHandle: boolean;
};

type DraggableStore<T> = T;

type ExtendedDrakeElement<T> = Element & {
  draggableStore: DraggableStore<T>;
  internalStore: InternalStore;
};

type ExtendedDrakeSource<T> = Element & { children: ExtendedDrakeElement<T>[] };

type ExtendedDragulaAPI<T> = {
  onDrag?: ({
    el,
    source,
  }: {
    el: ExtendedDrakeElement<T>;
    source: ExtendedDrakeSource<T>;
  }) => void;
  onDragEnd?: ({ el }: { el: ExtendedDrakeElement<T> }) => void;
  onDrop?: ({
    el,
    target,
    source,
    sibling,
  }: {
    el: ExtendedDrakeElement<T>;
    target: ExtendedDrakeElement<T>;
    source: ExtendedDrakeSource<T>;
    sibling: ExtendedDrakeElement<T>;
  }) => void;
  onCancel?: ({
    el,
    container,
    source,
  }: {
    el: ExtendedDrakeElement<T>;
    container: Element;
    source: ExtendedDrakeSource<T>;
  }) => void;
  onRemove?: ({
    el,
    container,
    source,
  }: {
    el: ExtendedDrakeElement<T>;
    container: Element;
    source: ExtendedDrakeSource<T>;
  }) => void;
  onShadow?: ({
    el,
    container,
    source,
  }: {
    el: ExtendedDrakeElement<T>;
    container: Element;
    source: ExtendedDrakeSource<T>;
  }) => void;
  onOver?: ({
    el,
    container,
    source,
  }: {
    el: ExtendedDrakeElement<T>;
    container: Element;
    source: ExtendedDrakeSource<T>;
  }) => void;
  onOut?: ({
    el,
    container,
    source,
  }: {
    el: ExtendedDrakeElement<T>;
    container: Element;
    source: ExtendedDrakeSource<T>;
  }) => void;
  onCloned?: ({
    clone,
    original,
    type,
  }: {
    clone: ExtendedDrakeElement<T>;
    original: ExtendedDrakeElement<T>;
    type: "mirror" | "copy";
  }) => void;
};

type ExtendedDragulaOptions<T> = {
  isContainer?: (el?: ExtendedDrakeElement<T>) => boolean;
  moves?: (
    el?: ExtendedDrakeElement<T>,
    container?: Element,
    handle?: Element,
    sibling?: ExtendedDrakeElement<T>
  ) => boolean;
  accepts?: (
    el?: ExtendedDrakeElement<T>,
    target?: ExtendedDrakeElement<T>,
    source?: Element,
    sibling?: ExtendedDrakeElement<T>
  ) => boolean;
  invalid?: (
    el?: ExtendedDrakeElement<T>,
    target?: ExtendedDrakeElement<T>
  ) => boolean;
} & Omit<DragulaOptions, "isContainer" | "moves" | "accepts" | "invalid">;

type ExtendedDragulaOptionsWithNamedParams<T> = {
  isContainer?: ({ el }: { el?: ExtendedDrakeElement<T> }) => boolean;
  moves?: ({
    el,
    container,
    handle,
    sibling,
  }: {
    el?: ExtendedDrakeElement<T>;
    container?: Element;
    handle?: Element;
    sibling?: ExtendedDrakeElement<T>;
  }) => boolean;
  accepts?: ({
    el,
    target,
    handle,
    sibling,
  }: {
    el?: ExtendedDrakeElement<T>;
    target?: ExtendedDrakeElement<T>;
    handle?: Element;
    sibling?: ExtendedDrakeElement<T>;
  }) => boolean;
  invalid?: ({
    el,
    target,
  }: {
    el?: ExtendedDrakeElement<T>;
    target?: ExtendedDrakeElement<T>;
  }) => boolean;
} & Omit<DragulaOptions, "isContainer" | "moves" | "accepts" | "invalid">;

type ExtendedDragulaOnAction<T> = {
  on: ((
    event: "drag",
    listener: (
      el: ExtendedDrakeElement<T>,
      source: ExtendedDrakeSource<T>
    ) => void
  ) => ReturnType<ExtendedDragula<T>>) &
    ((
      event: "dragend",
      listener: (el: ExtendedDrakeElement<T>) => void
    ) => ReturnType<ExtendedDragula<T>>) &
    ((
      event: "drop",
      listener: (
        el: ExtendedDrakeElement<T>,
        source: ExtendedDrakeSource<T>,
        target: ExtendedDrakeElement<T>,
        sibling: ExtendedDrakeElement<T>
      ) => void
    ) => ReturnType<ExtendedDragula<T>>) &
    ((
      event: "cancel" | "remove" | "shadow" | "over" | "out",
      listener: (
        el: ExtendedDrakeElement<T>,
        container: Element,
        source: ExtendedDrakeSource<T>
      ) => void
    ) => ReturnType<ExtendedDragula<T>>) &
    ((
      event: "cloned",
      listener: (
        clone: ExtendedDrakeElement<T>,
        original: ExtendedDrakeElement<T>,
        type: "mirror" | "copy"
      ) => void
    ) => ReturnType<ExtendedDragula<T>>);
};

type ExtendedDragula<T> = {
  (
    containers: Element[],
    options: ExtendedDragulaOptions<T>
  ): ExtendedDragulaOnAction<T> & Omit<Drake, "on">;
};

type UseDragulaParams<T> = {
  options: ExtendedDragulaOptionsWithNamedParams<T>;
  dependencyList: DependencyList;
} & ExtendedDragulaAPI<T>;

type InternalContextType = {
  internalStore: InternalStore;
  setInternalStore: Dispatch<SetStateAction<InternalStore>>;
};

// Generically typed by the exported functions
const DraggableContext = createContext<any>(undefined!);
const DrakeContext = createContext<ReturnType<ExtendedDragula<any>>>(
  undefined!
);

const InternalContext = createContext<InternalContextType>(undefined!);

function useDraggableStore<
  T = "draggableStore of unknown type T. Please specify type when calling useDraggableStore<T>"
>(): DraggableStore<T> {
  return useContext(DraggableContext);
}
const useInternalStore = () => useContext(InternalContext);
const useDrake = () => useContext(DrakeContext);

type DraggableProps<T> = {
  draggableStore: DraggableStore<T>;
} & HTMLProps<HTMLDivElement>;
function Draggable<T>({ draggableStore, ...props }: DraggableProps<T>) {
  const [internalStore, setInternalStore] = useState<InternalStore>({
    isMouseOverHandle: false,
  });

  const itemRef = useCallback(
    (node) => {
      if (node) {
        // eslint-disable-next-line no-param-reassign
        node.draggableStore = draggableStore;

        // eslint-disable-next-line no-param-reassign
        node.internalStore = internalStore;
      }
    },
    [draggableStore, internalStore]
  );

  return (
    <DraggableContext.Provider value={draggableStore}>
      <InternalContext.Provider value={{ internalStore, setInternalStore }}>
        <div ref={itemRef} {...props} />
      </InternalContext.Provider>
    </DraggableContext.Provider>
  );
}

function useDragula<T>({
  onDrag,
  onDragEnd,
  onDrop,
  onCancel,
  onRemove,
  onShadow,
  onOver,
  onOut,
  onCloned,
  options,
  dependencyList,
}: UseDragulaParams<T>) {
  const [drake, setDrake] = useState<ReturnType<ExtendedDragula<T>>>();
  const [mutationCount, setMutationCount] = useState(0);
  const [drakeNode, setDragulaNode] = useState();
  useEffect(() => {
    const observer = new MutationObserver(() =>
      setMutationCount(mutationCount + 1)
    );

    if (drakeNode) {
      observer.observe(drakeNode!, { subtree: true, childList: true });
    }

    return () => {
      observer.disconnect();
    };
  }, [drakeNode, mutationCount]);

  const drakeRef = useCallback(
    (node) => {
      if (node) {
        setDragulaNode(node);
        setDrake(
          (reactDragula as unknown as ExtendedDragula<T>)([...node.children], {
            ...options,
            isContainer(el) {
              if (!options.isContainer) return false;
              return options.isContainer({ el });
            },
            moves(el, container, handle, sibling) {
              if (!options.moves) return true;
              return options.moves({ el, container, handle, sibling });
            },
            accepts(el, target, handle, sibling) {
              if (!options.accepts) return true;
              return options.accepts({ el, target, handle, sibling });
            },
            invalid(el, target) {
              if (!options.invalid) return false;
              return options.invalid({ el, target });
            },
          })
            .on("drag", function listener(el, source) {
              onDrag?.({ el, source });
            })
            .on("dragend", function listener(el) {
              onDragEnd?.({ el });
            })
            .on("drop", function listener(el, source, target, sibling) {
              onDrop?.({ el, source, target, sibling });
            })
            .on("cancel", function listener(el, container, source) {
              onCancel?.({ el, container, source });
            })
            .on("remove", function listener(el, container, source) {
              onRemove?.({ el, container, source });
            })
            .on("shadow", function listener(el, container, source) {
              onShadow?.({ el, container, source });
            })
            .on("over", function listener(el, container, source) {
              onOver?.({ el, container, source });
            })
            .on("out", function listener(el, container, source) {
              onOut?.({ el, container, source });
            })
            .on("cloned", function listener(clone, original, type) {
              onCloned?.({ clone, original, type });
            })
        );
      }
    },
    [...dependencyList, mutationCount]
  );

  return { drake, drakeRef };
}

function DragulaContainer({ ...props }: HTMLProps<HTMLDivElement>) {
  return <div {...props} />;
}

type DragulaContainerProps<T> = {
  options?: ExtendedDragulaNamedParamOptions<T>;
  dependencyList?: DependencyList;
} & ExtendedDragulaAPI<T> &
  Omit<HTMLProps<HTMLDivElement>, "onDrop">;
function Dragula<
  T = "draggableStore of unknown type T. Please specify type when rendering <DragulaContainer<T> {...props} />"
>({
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
}: DragulaContainerProps<T>) {
  const { drake, drakeRef } = useDragula({
    onDrag,
    onDragEnd,
    onDrop,
    onCancel,
    onRemove,
    onShadow,
    onOver,
    onOut,
    onCloned,
    options,
    dependencyList,
  });

  return (
    <DrakeContext.Provider value={drake!}>
      <div ref={drakeRef} {...props} />
    </DrakeContext.Provider>
  );
}

type DragulaHandleProps = HTMLProps<HTMLDivElement>;
function DragulaHandle({ ...props }: DragulaHandleProps) {
  const drake = useDrake();
  const { internalStore, setInternalStore } = useInternalStore();

  if (!drake) return null;

  return (
    <div
      aria-hidden="true"
      onMouseEnter={() =>
        setInternalStore({ ...internalStore, isMouseOverHandle: true })
      }
      onMouseLeave={() =>
        setInternalStore({ ...internalStore, isMouseOverHandle: false })
      }
      {...props}
    />
  );
}

export default function initializeDragula<T>() {
  return {
    Dragula: (props: DragulaContainerProps<T>) => <Dragula<T> {...props} />,
    DragulaContainer: (props: HTMLProps<HTMLDivElement>) => (
      <DragulaContainer {...props} />
    ),
    Draggable: (props: DraggableProps<T>) => <Draggable<T> {...props} />,
    DragulaHandle: (props: DragulaHandleProps) => <DragulaHandle {...props} />,
    useDraggableStore: () => useDraggableStore<T>(),
    useInternalStore: () => useInternalStore(),
    useDrake: () => useDrake(),
  };
}
