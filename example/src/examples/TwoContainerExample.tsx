import { HTMLProps } from 'react';
import initializeDragula from 'react-hook-dragula';

const {
  Dragula,
  DragulaContainer,
  Draggable: UnstyledDraggable,
} = initializeDragula<Record<string, never>>();

function Draggable({ className = '', ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <UnstyledDraggable
      draggableStore={{}}
      className={`rounded p-4 cursor-move overflow-auto ${className}`}
      {...props}
    />
  );
}

export default function TwoContainerExample() {
  return (
    <Dragula
      className="grid grid-cols-2 space-x-4"
      options={{
        moves: ({ container }) => {
          console.log(container?.children);
          return true;
        },
      }}
    >
      <DragulaContainer className="p-4 bg-cannon-pink space-y-4 rounded">
        <Draggable className="bg-cosmic">
          You can move these elements between these two containers
        </Draggable>
        <Draggable className="bg-cosmic">
          Moving them anywhere else isn't quite possible
        </Draggable>
        <Draggable className="bg-cosmic">
          Anyting can be moved around. That includes images, links, or any other
          nested elements.
        </Draggable>
      </DragulaContainer>

      <DragulaContainer className="p-4 bg-turkish-rose space-y-4">
        <Draggable className="bg-strikemaster">
          There's also the possibility of moving elements around in the same
          container, changing their position
        </Draggable>
        <Draggable className="bg-strikemaster">
          This is the default use case. You only need to specify the containers
          you want to use
        </Draggable>
        <Draggable className="bg-strikemaster">
          More interactive use cases lie ahead
        </Draggable>
        <Draggable className="bg-strikemaster">
          Moving <code>&lt;input/&gt;</code> elements works just fine. You can
          still focus them, too.{' '}
          <input
            placeholder="See?"
            className="text-black rounded p-1 mt-4 block w-full"
          />
        </Draggable>
        <Draggable className="bg-strikemaster">
          Make sure to check out the{' '}
          <a href="https://github.com/bevacqua/dragula#readme">
            documentation on GitHub!
          </a>
        </Draggable>
      </DragulaContainer>
    </Dragula>
  );
}
