import { Dispatch, SetStateAction, useState } from 'react';
import initializeDragula from 'react-hook-dragula';

type Comic = {
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

const {
  Dragula,
  DragulaContainer,
  Draggable,
  DragulaHandle,
  useDraggableStore,
} = initializeDragula<DraggableStore>();

function DraggableContent() {
  const { comic, comics, setComics } = useDraggableStore();

  return (
    <div className="grid auto-cols-auto grid-flow-col items-center space-x-4 relative">
      {comics.length > 1 && (
        <DragulaHandle className="cursor-move rounded p-2 bg-green-400 w-max">
          👉 drag me by my handle 👈
        </DragulaHandle>
      )}

      {comic.num && (
        <button
          type="button"
          className="absolute top-2 right-3 text-xl font-bold"
          onClick={() => {
            setComics(comics.filter(({ num }) => comic.num !== num));
          }}
        >
          &times;
        </button>
      )}

      <div className="bg-strikemaster p-4 pr-8 grid auto-cols-auto grid-flow-col place-content-between space-x-4">
        <div>{comic.title}</div>
        <a
          href={comic.img}
          className="border rounded max-h-24 max-w-full"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="max-h-24 max-w-full"
            src={comic.img}
            alt={comic.alt}
          />
        </a>
      </div>
    </div>
  );
}

async function getRandomXkcdComic() {
  const currentComicId = (
    await (await fetch('https://xkcd.vercel.app/?comic=latest')).json()
  ).num;

  const comicID = Math.floor(Math.random() * currentComicId);

  return await (
    await fetch(`https://xkcd.vercel.app/?comic=${comicID}`)
  ).json();
}

export default function DynamicContentExample() {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<Comic[]>([]);

  return (
    <>
      <div>
        Click{' '}
        <button
          type="button"
          className="bg-blue-500 disabled:bg-gray-400 hover:bg-blue-400 rounded py-1 px-3 mx-1"
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            const element = await getRandomXkcdComic();
            setComics([...comics, element]);
            setLoading(false);
          }}
        >
          {loading ? 'loading...' : 'here'}
        </button>{' '}
        to add some XKCD comics and then drag them around by their handle!
      </div>

      {comics.length > 0 ? (
        <Dragula
          options={{ moves: ({ el }) => !!el?.internalStore.isMouseOverHandle }}
          onDrop={({ source }) => {
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
      ) : (
        <div className="p-4 bg-turkish-rose">
          <div className="bg-strikemaster p-4 pr-8">
            Click the button above to fill this with comics!
          </div>
        </div>
      )}
    </>
  );
}
