import { ComponentProps, useState } from 'react';
import initializeDragula from 'react-hook-dragula';

type DraggableStore = { databaseId: number };
const {
  Dragula,
  DragulaContainer,
  Draggable: UnstyledDraggable,
} = initializeDragula<DraggableStore>();

function Draggable({
  className = '',
  ...props
}: ComponentProps<typeof UnstyledDraggable>) {
  return (
    <UnstyledDraggable
      className="rounded p-4 cursor-move overflow-auto bg-strikemaster"
      {...props}
    />
  );
}

export default function StatefulExample() {
  const [order, setOrder] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="space-y-4">
      <div className="font-bold">Current order: {String(order)}</div>
      <Dragula
        onDrop={({ source }) =>
          setOrder(
            [...source.children].map(
              ({ draggableStore: { databaseId } }) => databaseId,
            ),
          )
        }
      >
        <DragulaContainer className="p-4 bg-turkish-rose space-y-4">
          <Draggable draggableStore={{ databaseId: 1 }}>
            Database id: 1
          </Draggable>
          <Draggable draggableStore={{ databaseId: 2 }}>
            Database id: 2
          </Draggable>
          <Draggable draggableStore={{ databaseId: 3 }}>
            Database id: 3
          </Draggable>
          <Draggable draggableStore={{ databaseId: 4 }}>
            Database id: 4
          </Draggable>
          <Draggable draggableStore={{ databaseId: 5 }}>
            Database id: 5
          </Draggable>
        </DragulaContainer>
      </Dragula>
    </div>
  );
}
