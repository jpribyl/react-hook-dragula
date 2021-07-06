import Code from 'Code';
import TwoContainerExample from 'examples/TwoContainerExample';
import StatefulExample from 'examples/StatefulExample';
import DynamicContentExample from 'examples/DynamicContentExample';
import Logo from 'Logo';
import { hot } from 'react-hot-loader';
import 'sass/App.scss';

function App() {
  return (
    <div className="min-w-min min-h-screen bg-night-shadz py-8">
      <div className="max-w-min mx-auto text-white space-y-10">
        <div className="bg-tapestry-172 pt-4 shadow rounded">
          <div className="mx-8 text-6xl whitespace-nowrap font-bold flex items-center justify-center">
            <div>react-hook-</div>
            <Logo width="50%" />
          </div>
          <div className="whitespace-nowrap bg-tapestry-170 font-bold px-4 p-2 flex items-center justify-between space-x-4">
            <div>
              Drag and drop so simple it hurts - Now featuring React Hooks!
            </div>
            <div className="mx-auto self-stretch border" />
            <a
              className="flex items-center space-x-4 hover:text-aqua-forest"
              href="https://www.github.com/jpribyl/react-hook-dragula"
            >
              <div>Code available on</div>
              <svg height="50px" fill="currentColor" viewBox="0 0 24 24">
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>

        <div className="bg-tapestry-170 p-4 shadow text-lg rounded space-y-4">
          <div className="border-b text-xl font-bold">Initializing Dragula</div>
          <p>
            First, we need to initialize dragula. This allows us to include
            typings for the data we attach to event handlers.
          </p>
          <p>
            For example, maybe we want to make a{' '}
            <code className="text-sm">POST</code> request{' '}
            <code className="text-sm">onDrop</code> which includes the{' '}
            <code className="text-sm">id</code> and{' '}
            <code className="text-sm">name</code> of your draggable items:
          </p>
          <Code className="rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96">
            {`import initializeDragula from 'react-hook-dragula';

type DraggableStore = {
  itemId: number;
  itemName: string;
}

export const {
  Dragula,
  DragulaContainer,
  Draggable,
} = initializeDragula<DraggableStore>();`}
          </Code>
        </div>

        <div className="bg-tapestry-170 p-4 shadow text-lg rounded space-y-4">
          <div className="border-b text-xl font-bold">
            Two container example
          </div>
          <div>
            Now that we've done that, we can start to build containers! Great
            stuff.
          </div>
          <TwoContainerExample />
          <p>Excluding styles, these containers were built like this:</p>

          <Code className="rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96">
            {`<Dragula>
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
</Dragula>`}
          </Code>
        </div>

        <div className="bg-tapestry-170 p-4 shadow text-lg rounded space-y-4">
          <div className="border-b text-xl font-bold">Stateful example</div>
          <div>
            If we need too, we can pass state from react to dragula and back
            again.
          </div>
          <StatefulExample />
          <div>
            As long as we initialize dragula with the correct type for the{' '}
            <code className="text-sm">draggableStore</code> then it will be
            typesafe:
          </div>
          <Code className="rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96">
            {`function StatefulExample() {
  const [order, setOrder] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <p>
        Current order: {String(order)}
      </p>

      <Dragula
        onDrop={({ source }) =>
          setOrder(
            [...source.children].map(
              ({ draggableStore: { databaseId } }) => databaseId,
            ),
          )
        }
      >
        <DragulaContainer>
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
}`}
          </Code>
        </div>

        <div className="bg-tapestry-170 p-4 shadow text-lg rounded space-y-4">
          <div className="border-b text-xl font-bold">
            Dynamic content example
          </div>
          <p>
            We are able to allow React to hold and update the state even when
            content changes dynamically.
          </p>
          <p>
            This example looks at using a <code className="text-sm">GET</code>{' '}
            request to append content which may be dragged (by a handle) or
            removed
          </p>
          <DynamicContentExample />
          <p>In order to build this example, we need to hold some state:</p>
          <Code className="rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96">
            {`type Comic = {
  num: number;
  title: string;
  img: string;
  alt: string;
};

type DraggableStore = {
  comic: Comic;
  comics: Comic[];
  setComics: Dispatch<SetStateAction<Comic[]>>;
};

function DynamicContentExample() {
  // this will be passed into the draggableStore
  const [comics, setComics] = useState<Comic[]>([]);

  return (
    <div>
      {comics.length > 0 && (
        <Dragula
          options={{ moves: ({ el }) => !!el?.internalStore.isMouseOverHandle }}
          onDrop={({ source }) => {

            // source.children is an HTML object array, so spread it into a JS array
            setComics(
              [...source.children].map(
                ({ draggableStore: { comic } }) => comic, 
              ),
            );
          }}
        >
          <DragulaContainer className="p-4 bg-turkish-rose space-y-4">
            {comics.map(comic => (
              <Draggable
                // in production, make sure key is unique - it's only quasi-unique here
                key={comic.num}
                className="rounded p-4 overflow-auto"
                draggableStore={{
                  comic,
                  comics,
                  setComics,
                }}
              >
                <DraggableContent />
              </Draggable>
            ))}
          </DragulaContainer>
        </Dragula>
      )}
    </div>
  );
}`}
          </Code>
          <p>
            We can use the <code className="text-sm">{'<DragulaHandle/>'}</code>{' '}
            component when we render the content.{' '}
            <code className="text-sm">react-hook-dragula</code> uses this to
            store{' '}
            <code className="text-sm">internalStore.isMouseOverHandle</code>{' '}
            which is used above in conjunction with the{' '}
            <code className="text-sm">moves</code> option
          </p>
          <Code className="rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96">
            {`function DraggableContent() {
  const { comic, comics, setComics } = useDraggableStore();

  return (
    <div>
      // DragulaHandle --> internalStore.isMouseOverHandle --> dragula.moves option
      {comics.length > 1 && (
        <DragulaHandle>
          👉 drag me by my handle 👈
        </DragulaHandle>
      )}

      // this allows us to remove an item
      {comic.num && (
        <button
          type="button"
          onClick={() => {
            setComics(comics.filter(({ num }) => comic.num !== num));
          }}
        >
          &times;
        </button>
      )}

      <div>
        <div>{comic.title}</div>
        <a href={comic.img} >
          <img src={comic.img} alt={comic.alt} />
        </a>
      </div>
    </div>
  );
}`}
          </Code>
        </div>
      </div>
    </div>
  );
}

export default hot(module)(App);
