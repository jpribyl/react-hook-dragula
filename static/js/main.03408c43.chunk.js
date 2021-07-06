(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{18:function(e,t,a){"use strict";(function(e){var n=a(6),c=a(20),s=a(21),r=a(22),i=a(23),o=a(24),l=(a(55),a(0));t.a=Object(o.hot)(e)((function(){return Object(l.jsx)("div",{className:"min-w-min min-h-screen bg-night-shadz py-8",children:Object(l.jsxs)("div",{className:"max-w-min mx-auto text-white space-y-10",children:[Object(l.jsxs)("div",{className:"bg-tapestry-172 pt-4 shadow rounded",children:[Object(l.jsxs)("div",{className:"mx-8 text-6xl whitespace-nowrap font-bold flex items-center justify-center",children:[Object(l.jsx)("div",{children:"react-hook-"}),Object(l.jsx)(i.a,{width:"50%"})]}),Object(l.jsxs)("div",{className:"whitespace-nowrap bg-tapestry-170 font-bold px-4 p-2 flex items-center justify-between space-x-4",children:[Object(l.jsx)("div",{children:"Drag and drop so simple it hurts - Now featuring React Hooks!"}),Object(l.jsx)("div",{className:"mx-auto self-stretch border"}),Object(l.jsxs)("a",{className:"flex items-center space-x-4 hover:text-aqua-forest",href:"https://www.github.com/jpribyl/react-hook-dragula",children:[Object(l.jsx)("div",{children:"Code available on"}),Object(l.jsxs)("svg",{height:"50px",fill:"currentColor",viewBox:"0 0 24 24",children:[Object(l.jsx)("title",{children:"GitHub icon"}),Object(l.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})]})]})]}),Object(l.jsxs)("div",{className:"bg-tapestry-170 p-4 shadow text-lg rounded space-y-4",children:[Object(l.jsx)("div",{className:"border-b text-xl font-bold",children:"Initializing Dragula"}),Object(l.jsx)("p",{children:"First, we need to initialize dragula. This allows us to include typings for the data we attach to event handlers."}),Object(l.jsxs)("p",{children:["For example, maybe we want to make a"," ",Object(l.jsx)("code",{className:"text-sm",children:"POST"})," request"," ",Object(l.jsx)("code",{className:"text-sm",children:"onDrop"})," which includes the"," ",Object(l.jsx)("code",{className:"text-sm",children:"id"})," and"," ",Object(l.jsx)("code",{className:"text-sm",children:"name"})," of your draggable items:"]}),Object(l.jsx)(n.a,{className:"rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96",children:"import initializeDragula from 'react-hook-dragula';\n\ntype DraggableStore = {\n  itemId: number;\n  itemName: string;\n}\n\nexport const {\n  Dragula,\n  DragulaContainer,\n  Draggable,\n} = initializeDragula<DraggableStore>();"})]}),Object(l.jsxs)("div",{className:"bg-tapestry-170 p-4 shadow text-lg rounded space-y-4",children:[Object(l.jsx)("div",{className:"border-b text-xl font-bold",children:"Two container example"}),Object(l.jsx)("div",{children:"Now that we've done that, we can start to build containers! Great stuff."}),Object(l.jsx)(c.a,{}),Object(l.jsx)("p",{children:"Excluding styles, these containers were built like this:"}),Object(l.jsx)(n.a,{className:"rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96",children:"<Dragula>\n  <DragulaContainer>\n    <Draggable>\n      You can move these elements between these two containers\n    </Draggable>\n  </DragulaContainer>\n\n  <DragulaContainer>\n    <Draggable>\n      There's also the possibility of moving elements around in the\n      same container, changing their position\n    </Draggable>\n  </DragulaContainer>\n</Dragula>"})]}),Object(l.jsxs)("div",{className:"bg-tapestry-170 p-4 shadow text-lg rounded space-y-4",children:[Object(l.jsx)("div",{className:"border-b text-xl font-bold",children:"Stateful example"}),Object(l.jsx)("div",{children:"If we need too, we can pass state from react to dragula and back again."}),Object(l.jsx)(s.a,{}),Object(l.jsxs)("div",{children:["As long as we initialize dragula with the correct type for the"," ",Object(l.jsx)("code",{className:"text-sm",children:"draggableStore"})," then it will be typesafe:"]}),Object(l.jsx)(n.a,{className:"rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96",children:"function StatefulExample() {\n  const [order, setOrder] = useState([1, 2, 3, 4, 5]);\n\n  return (\n    <div>\n      <p>\n        Current order: {String(order)}\n      </p>\n\n      <Dragula\n        onDrop={({ source }) =>\n          setOrder(\n            [...source.children].map(\n              ({ draggableStore: { databaseId } }) => databaseId,\n            ),\n          )\n        }\n      >\n        <DragulaContainer>\n          <Draggable draggableStore={{ databaseId: 1 }}>\n            Database id: 1\n          </Draggable>\n          <Draggable draggableStore={{ databaseId: 2 }}>\n            Database id: 2\n          </Draggable>\n          <Draggable draggableStore={{ databaseId: 3 }}>\n            Database id: 3\n          </Draggable>\n          <Draggable draggableStore={{ databaseId: 4 }}>\n            Database id: 4\n          </Draggable>\n          <Draggable draggableStore={{ databaseId: 5 }}>\n            Database id: 5\n          </Draggable>\n        </DragulaContainer>\n      </Dragula>\n    </div>\n  );\n}"})]}),Object(l.jsxs)("div",{className:"bg-tapestry-170 p-4 shadow text-lg rounded space-y-4",children:[Object(l.jsx)("div",{className:"border-b text-xl font-bold",children:"Dynamic content example"}),Object(l.jsx)("p",{children:"We are able to allow React to hold and update the state even when content changes dynamically."}),Object(l.jsxs)("p",{children:["This example looks at using a ",Object(l.jsx)("code",{className:"text-sm",children:"GET"})," ","request to append content which may be dragged (by a handle) or removed"]}),Object(l.jsx)(r.a,{}),Object(l.jsx)("p",{children:"In order to build this example, we need to hold some state:"}),Object(l.jsx)(n.a,{className:"rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96",children:'type Comic = {\n  num: number;\n  title: string;\n  img: string;\n  alt: string;\n};\n\ntype DraggableStore = {\n  comic: Comic;\n  comics: Comic[];\n  setComics: Dispatch<SetStateAction<Comic[]>>;\n};\n\nfunction DynamicContentExample() {\n  // this will be passed into the draggableStore\n  const [comics, setComics] = useState<Comic[]>([]);\n\n  return (\n    <div>\n      {comics.length > 0 && (\n        <Dragula\n          options={{ moves: ({ el }) => !!el?.internalStore.isMouseOverHandle }}\n          onDrop={({ source }) => {\n\n            // source.children is an HTML object array, so spread it into a JS array\n            setComics(\n              [...source.children].map(\n                ({ draggableStore: { comic } }) => comic, \n              ),\n            );\n          }}\n        >\n          <DragulaContainer className="p-4 bg-turkish-rose space-y-4">\n            {comics.map(comic => (\n              <Draggable\n                // in production, make sure key is unique - it\'s only quasi-unique here\n                key={comic.num}\n                className="rounded p-4 overflow-auto"\n                draggableStore={{\n                  comic,\n                  comics,\n                  setComics,\n                }}\n              >\n                <DraggableContent />\n              </Draggable>\n            ))}\n          </DragulaContainer>\n        </Dragula>\n      )}\n    </div>\n  );\n}'}),Object(l.jsxs)("p",{children:["We can use the ",Object(l.jsx)("code",{className:"text-sm",children:"<DragulaHandle/>"})," ","component when we render the content."," ",Object(l.jsx)("code",{className:"text-sm",children:"react-hook-dragula"})," uses this to store"," ",Object(l.jsx)("code",{className:"text-sm",children:"internalStore.isMouseOverHandle"})," ","which is used above in conjunction with the"," ",Object(l.jsx)("code",{className:"text-sm",children:"moves"})," option"]}),Object(l.jsx)(n.a,{className:"rounded border p-3 mx-auto mb-3 overflow-auto text-sm max-h-96",children:'function DraggableContent() {\n  const { comic, comics, setComics } = useDraggableStore();\n\n  return (\n    <div>\n      // DragulaHandle --\x3e internalStore.isMouseOverHandle --\x3e dragula.moves option\n      {comics.length > 1 && (\n        <DragulaHandle>\n          \ud83d\udc49 drag me by my handle \ud83d\udc48\n        </DragulaHandle>\n      )}\n\n      // this allows us to remove an item\n      {comic.num && (\n        <button\n          type="button"\n          onClick={() => {\n            setComics(comics.filter(({ num }) => comic.num !== num));\n          }}\n        >\n          &times;\n        </button>\n      )}\n\n      <div>\n        <div>{comic.title}</div>\n        <a href={comic.img} >\n          <img src={comic.img} alt={comic.alt} />\n        </a>\n      </div>\n    </div>\n  );\n}'})]})]})})}))}).call(this,a(29)(e))},20:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(2),c=a(5),s=a(4),r=a.n(s),i=a(0),o=r()(),l=o.Dragula,d=o.DragulaContainer,b=o.Draggable;function u(e){var t=e.className,a=void 0===t?"":t,s=Object(c.a)(e,["className"]);return Object(i.jsx)(b,Object(n.a)({draggableStore:{},className:"rounded p-4 cursor-move overflow-auto ".concat(a)},s))}function m(){return Object(i.jsxs)(l,{className:"grid grid-cols-2 space-x-4",options:{moves:function(e){var t=e.container;return console.log(null===t||void 0===t?void 0:t.children),!0}},children:[Object(i.jsxs)(d,{className:"p-4 bg-cannon-pink space-y-4 rounded",children:[Object(i.jsx)(u,{className:"bg-cosmic",children:"You can move these elements between these two containers"}),Object(i.jsx)(u,{className:"bg-cosmic",children:"Moving them anywhere else isn't quite possible"}),Object(i.jsx)(u,{className:"bg-cosmic",children:"Anyting can be moved around. That includes images, links, or any other nested elements."})]}),Object(i.jsxs)(d,{className:"p-4 bg-turkish-rose space-y-4",children:[Object(i.jsx)(u,{className:"bg-strikemaster",children:"There's also the possibility of moving elements around in the same container, changing their position"}),Object(i.jsx)(u,{className:"bg-strikemaster",children:"This is the default use case. You only need to specify the containers you want to use"}),Object(i.jsx)(u,{className:"bg-strikemaster",children:"More interactive use cases lie ahead"}),Object(i.jsxs)(u,{className:"bg-strikemaster",children:["Moving ",Object(i.jsx)("code",{children:"<input/>"})," elements works just fine. You can still focus them, too."," ",Object(i.jsx)("input",{placeholder:"See?",className:"text-black rounded p-1 mt-4 block w-full"})]}),Object(i.jsxs)(u,{className:"bg-strikemaster",children:["Make sure to check out the"," ",Object(i.jsx)("a",{href:"https://github.com/bevacqua/dragula#readme",children:"documentation on GitHub!"})]})]})]})}},21:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(8),c=a(9),s=a(2),r=a(5),i=a(1),o=a(4),l=a.n(o),d=a(0),b=l()(),u=b.Dragula,m=b.DragulaContainer,h=b.Draggable;function g(e){e.className;var t=Object(r.a)(e,["className"]);return Object(d.jsx)(h,Object(s.a)({className:"rounded p-4 cursor-move overflow-auto bg-strikemaster"},t))}function j(){var e=Object(i.useState)([1,2,3,4,5]),t=Object(c.a)(e,2),a=t[0],s=t[1];return Object(d.jsxs)("div",{className:"space-y-4",children:[Object(d.jsxs)("div",{className:"font-bold",children:["Current order: ",String(a)]}),Object(d.jsx)(u,{onDrop:function(e){var t=e.source;return s(Object(n.a)(t.children).map((function(e){return e.draggableStore.databaseId})))},children:Object(d.jsxs)(m,{className:"p-4 bg-turkish-rose space-y-4",children:[Object(d.jsx)(g,{draggableStore:{databaseId:1},children:"Database id: 1"}),Object(d.jsx)(g,{draggableStore:{databaseId:2},children:"Database id: 2"}),Object(d.jsx)(g,{draggableStore:{databaseId:3},children:"Database id: 3"}),Object(d.jsx)(g,{draggableStore:{databaseId:4},children:"Database id: 4"}),Object(d.jsx)(g,{draggableStore:{databaseId:5},children:"Database id: 5"})]})})]})}},22:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(10),c=a.n(n),s=a(8),r=a(9),i=a(13),o=a(1),l=a(4),d=a.n(l),b=a(0),u=d()(),m=u.Dragula,h=u.DragulaContainer,g=u.Draggable,j=u.DragulaHandle,x=u.useDraggableStore;function p(){var e=x(),t=e.comic,a=e.comics,n=e.setComics;return Object(b.jsxs)("div",{className:"grid auto-cols-auto grid-flow-col items-center space-x-4 relative",children:[a.length>1&&Object(b.jsx)(j,{className:"cursor-move rounded p-2 bg-green-400 w-max",children:"\ud83d\udc49 drag me by my handle \ud83d\udc48"}),t.num&&Object(b.jsx)("button",{type:"button",className:"absolute top-2 right-3 text-xl font-bold",onClick:function(){n(a.filter((function(e){var a=e.num;return t.num!==a})))},children:"\xd7"}),Object(b.jsxs)("div",{className:"bg-strikemaster p-4 pr-8 grid auto-cols-auto grid-flow-col place-content-between space-x-4",children:[Object(b.jsx)("div",{children:t.title}),Object(b.jsx)("a",{href:t.img,className:"border rounded max-h-24 max-w-full",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{className:"max-h-24 max-w-full",src:t.img,alt:t.alt})})]})]})}function v(){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://xkcd.vercel.app/?comic=latest");case 2:return e.next=4,e.sent.json();case 4:return t=e.sent.num,a=Math.floor(Math.random()*t),e.next=8,fetch("https://xkcd.vercel.app/?comic=".concat(a));case 8:return e.next=10,e.sent.json();case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(o.useState)([]),d=Object(r.a)(l,2),u=d[0],j=d[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:["Click"," ",Object(b.jsx)("button",{type:"button",className:"bg-blue-500 disabled:bg-gray-400 hover:bg-blue-400 rounded py-1 px-3 mx-1",disabled:a,onClick:Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,v();case 3:t=e.sent,j([].concat(Object(s.a)(u),[t])),n(!1);case 6:case"end":return e.stop()}}),e)}))),children:a?"loading...":"here"})," ","to add some XKCD comics and then drag them around by their handle!"]}),u.length>0?Object(b.jsx)(m,{options:{moves:function(e){var t=e.el;return!!(null===t||void 0===t?void 0:t.internalStore.isMouseOverHandle)}},onDrop:function(e){var t=e.source;j(Object(s.a)(t.children).map((function(e){return e.draggableStore.comic})))},children:Object(b.jsx)(h,{className:"p-4 bg-turkish-rose space-y-4",children:u.map((function(e){return Object(b.jsx)(g,{className:"rounded p-4 overflow-auto",draggableStore:{comic:e,comics:u,setComics:j},children:Object(b.jsx)(p,{})},e.num)}))})}):Object(b.jsx)("div",{className:"p-4 bg-turkish-rose",children:Object(b.jsx)("div",{className:"bg-strikemaster p-4 pr-8",children:"Click the button above to fill this with comics!"})})]})}},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(2),c=a(0);function s(e){return Object(c.jsxs)("svg",Object(n.a)(Object(n.a)({version:"1",xmlns:"http://www.w3.org/2000/svg",width:"515.771",height:"213.557",viewBox:"0 0 515.771 213.557"},e),{},{children:[Object(c.jsx)("path",{fill:"#961914",stroke:"#52100F",strokeWidth:"4",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M45.09 158.663c-2.652 40.673-7.848 34.5-7.797 43.87.05 9.37 8.36 9.02 8.36 9.02s8.315.26 8.265-9.11c-.064-11.833-5.916-5.496-8.827-43.78z"}),Object(c.jsx)("path",{fill:"#221C3B",d:"M161.298 129.555c-.584-.182-32.122-10.11-68.73-26.774l28.113-10.01c.815-.29 1.35-1.07 1.33-1.934-.02-.864-.596-1.617-1.423-1.865-.852-.255-85.436-26.222-107.022-77.88-.366-.877-1.3-1.374-2.23-1.19-.934.183-1.608.997-1.615 1.948-.15 21.842 9.604 43.05 28.337 61.876C25.045 65.42 13.063 56.408 3.41 46.828c-.66-.655-1.68-.77-2.466-.278-.787.49-1.134 1.456-.84 2.335 15.855 47.184 75.654 67.73 78.192 68.582.083.028.168.05.254.067l81.773 15.895c.128.024.256.036.383.036.9 0 1.71-.61 1.938-1.512.258-1.03-.332-2.083-1.346-2.4z"}),Object(c.jsx)("path",{fill:"#952A58",d:"M20.208 33.882C41.114 63.294 88.69 88.366 88.69 88.366l-5.67 11.54S28.464 66.843 20.207 33.883z"}),Object(c.jsx)("path",{fill:"#221C3B",d:"M176.817 96.7C169.673 82.777 156 73.51 136.173 69.153 81.2 57.076 66.583 46.878 38.43.955c-.473-.77-1.4-1.128-2.268-.874-.866.254-1.456 1.057-1.438 1.96.192 9.995 4.417 22.933 9.31 37.913 11.585 35.473 26.002 79.622-.626 117.455-.03.04-.057.083-.083.127-.157.258-.25.543-.28.832v.008c-.008.095-.01.19-.007.283v.008c.018.38.145.757.378 1.08.71.985 1.82 2.365 3.222 4.11 6.98 8.69 23.325 29.04 20.575 41.56-.212.967.316 1.944 1.242 2.297.233.09.474.13.71.13.707 0 1.383-.374 1.746-1.02 8.72-15.55 27.214-18.688 46.793-22.01 25.645-4.35 54.71-9.282 62.648-45.41 3.605-16.406 2.383-31.173-3.533-42.703zM80.36 118.05c9.852 2.812 31.804 9.922 32.124 24.504-15.71 4.128-28.223 7.467-41.418 19.84-3.02-1.093-11.167-3.906-18.468-5.194 14.872-8.625 23.905-24.973 27.76-39.15z"}),Object(c.jsx)("path",{fill:"#952A58",d:"M47.667 26.33c21.25 33.75 42.806 41.29 80.186 49.5 36.266 7.97 48.95 32.165 42.857 59.904-11.654 53.044-78.047 28.823-100.376 56.015-9.748-24.576-25.298-33.18-25.298-33.18s18.36 6.14 24.6 13.206c2.698 3.055 3.915 6.678 3.948 7.22 1.417 1-.43-5.054.34-5.968 21.34-25.367 55.016-14.355 60.676-40.12 7.2-32.77-34.33-29.798-59.6-42.625-5.08 31.65-10.715 48.995-29.964 68.287 21.16-21.657 22.518-60.586 14.408-99.74 21.733 28.916 53.058 34.035 69.974 37.75-37.017-11.142-66.5-29.685-81.75-70.25z"}),Object(c.jsxs)("g",{fill:"#221C3B",children:[Object(c.jsx)("path",{d:"M225.64 111.34c-4.635 0-8.56 1.99-11.666 5.916-1.21 1.53-2.352 3.367-3.415 5.5v-9.414c0-.548-.226-1.072-.623-1.45-.396-.376-.92-.572-1.48-.547l-18.1.913c-1.064.054-1.9.932-1.9 1.998v3.813c0 1.103.897 2 2 2h4.405c1.36 0 2.338.34 2.986 1.044.674.733 1.03 2.113 1.03 3.99v32.066c0 .145 0 .413-.51.807-.342.263-1.07.577-2.593.577h-4.995c-1.104 0-2 .896-2 2v4.028c0 1.104.896 2 2 2h31.26c1.104 0 2-.896 2-2v-4.028c0-1.104-.896-2-2-2h-6.392c-2.272 0-3.027-.434-3.204-.566-.254-.19-.49-.467-.49-1.193V146c0-3.672 1.05-8.72 3.12-15 1.284-3.847 3.11-6.893 5.422-9.045.52-.48 1.023-.883 1.497-1.2-.334.944-.503 1.932-.503 2.954 0 2.333.674 4.252 2.003 5.7 1.355 1.48 3.21 2.26 5.368 2.26 2.214 0 4.155-.887 5.616-2.564 1.415-1.622 2.132-3.834 2.132-6.578 0-3.322-1.014-6.042-3.014-8.085-2.01-2.06-4.686-3.102-7.954-3.102zM295.888 160.976l-1.934-3.008c-.3-.467-.78-.788-1.325-.887-.546-.096-1.107.033-1.553.364-1.18.878-2.26 1.323-3.21 1.323-.42 0-.88-.106-1.414-.906-.378-.55-.83-1.73-.83-4.236v-27.5c0-4.33-1.832-8.045-5.46-11.055-3.503-2.867-8.537-4.32-14.962-4.32-6.885 0-12.568 1.613-16.894 4.793-4.516 3.32-6.805 7.133-6.805 11.333 0 2.434.8 4.48 2.376 6.076 1.583 1.608 3.57 2.423 5.91 2.423 2.215 0 4.06-.708 5.483-2.104 1.43-1.406 2.154-3.214 2.154-5.373 0-1.556-.634-3.187-1.958-5.014-.537-.716-.76-1.13-.847-1.328.113-.168.45-.557 1.366-1.107 1.94-1.108 4.316-1.67 7.064-1.67 2.887 0 5.177.784 7 2.398 1.75 1.55 2.602 3.345 2.602 5.485v5.855c-9.62 1.237-17.52 3.567-23.5 6.933-6.788 3.82-10.23 8.788-10.23 14.768 0 4.082 1.6 7.475 4.754 10.082 3.042 2.514 7.428 3.788 13.037 3.788 3.894 0 7.304-.668 10.136-1.985 2.265-1.054 4.722-2.856 7.46-5.478 1.114 2.243 2.368 3.905 3.798 5.042 2.02 1.606 4.508 2.422 7.395 2.422 3.73 0 7.142-1.56 10.134-4.633.65-.668.754-1.695.25-2.477zm-42.812-7.89c0-3.307 1.13-5.773 3.438-7.526 3.19-2.378 8.614-4.193 16.14-5.406v4.877c0 4.336-1.335 7.826-4.082 10.67-2.73 2.823-5.854 4.196-9.547 4.196-1.805 0-3.208-.56-4.292-1.708-1.115-1.184-1.657-2.852-1.657-5.1z"}),Object(c.jsx)("path",{d:"M343.552 109.676c-3.247 0-6.576 1.604-10.142 4.894-1.917-1.144-3.902-2.035-5.92-2.657-2.51-.77-5.147-1.163-7.84-1.163-6.587 0-12.05 1.825-16.235 5.425-4.275 3.676-6.443 8.307-6.443 13.763 0 3.458.885 6.58 2.63 9.276 1.092 1.69 2.523 3.226 4.28 4.593-2.086 1.022-3.67 2.18-4.795 3.5-1.76 2.064-2.652 4.515-2.652 7.285 0 3.04 1.118 5.62 3.323 7.667.826.77 1.81 1.462 2.946 2.077-1.828.75-3.294 1.647-4.427 2.704-2.292 2.14-3.454 4.584-3.454 7.264 0 3.404 1.75 6.453 5.194 9.06 4.063 3.085 10.234 4.65 18.344 4.65 9.77 0 17.28-2.267 22.317-6.725 3.805-3.32 5.733-7.48 5.733-12.357 0-4.544-1.757-8.18-5.224-10.807-3.343-2.53-8.47-3.762-15.72-3.762h-.003l-13.227.27c-3.616 0-4.814-.55-5.163-.785-.56-.38-.786-.833-.786-1.567 0-1.05.34-1.724 1.11-2.23.465-.295 2.1-.98 7.202-.98h5.853c3.5 0 7.18-1 10.943-2.967 3.792-1.983 6.57-4.343 8.257-7.016 1.702-2.694 2.565-5.827 2.565-9.312 0-2.017-.33-3.94-.982-5.712-.505-1.372-1.306-2.877-2.435-4.568.363-.288.656-.453.88-.546l.012.042c1.294 4.534 4.352 5.21 6.06 5.21 1.627 0 3.11-.678 4.294-1.964 1.15-1.255 1.733-2.82 1.733-4.655 0-2.2-.802-4.093-2.382-5.625-1.56-1.516-3.526-2.284-5.846-2.284zm-33.848 59.375c2.468-1.603 6.845-2.415 13.01-2.415 3.858 0 6.783.304 8.692.9 1.7.534 2.92 1.276 3.626 2.204.7.92 1.042 1.87 1.042 2.897 0 1.777-1.268 3.51-3.77 5.148-2.77 1.814-7.08 2.734-12.814 2.734-4.73 0-8.368-.828-10.82-2.463-1.55-1.023-2.272-2.32-2.272-4.078 0-1.872 1.08-3.484 3.306-4.93zm3.48-30.27c-1.76-2.107-2.65-5.208-2.65-9.218 0-3.703.878-6.573 2.612-8.53 1.693-1.914 3.786-2.844 6.397-2.844 2.6 0 4.694.967 6.406 2.957 1.763 2.05 2.657 4.954 2.657 8.632 0 4.002-.878 7.063-2.61 9.096-1.676 1.967-3.77 2.923-6.4 2.923-2.624 0-4.722-.987-6.414-3.016zM417.52 158.553h-3.168c-1.414 0-2.44-.32-3.134-.98-.666-.632-.99-1.59-.99-2.928V113.34c0-.547-.225-1.072-.622-1.45-.397-.377-.916-.566-1.48-.546l-17.67.913c-1.064.055-1.897.933-1.897 1.998v3.76c0 1.08.857 1.966 1.937 2 4.17.126 5.556.86 5.96 1.172.74.568 1.07 1.313 1.07 2.414v18.854c0 4.413-1.216 7.964-3.72 10.857-2.428 2.806-5.272 4.17-8.697 4.17-2.694 0-4.818-.88-6.49-2.688-1.693-1.828-2.55-4.55-2.55-8.095v-33.354c0-.548-.226-1.072-.623-1.45-.397-.378-.93-.567-1.48-.548l-17.832.913c-1.063.055-1.897.933-1.897 1.998v3.76c0 1.088.87 1.976 1.957 2 4.096.09 5.276.67 5.558.858.97.63 1.4 1.473 1.4 2.73v21.86c0 7.726 1.775 13.36 5.26 16.728 3.447 3.413 7.765 5.144 12.83 5.144 3.458 0 6.902-.997 10.237-2.962 2.186-1.288 4.374-3.01 6.535-5.144l.6 5.516c.11 1.018.97 1.784 1.987 1.784h.046l16.92-.377c1.086-.023 1.954-.912 1.954-2v-3.598c0-1.107-.897-2.002-2-2.002zM452.54 158.553h-5.316c-.83 0-1.492-.208-1.954-.574-.058-.053-.235-.21-.235-.81V84.23c0-.547-.224-1.07-.618-1.447-.396-.377-.908-.58-1.474-.552l-19.927.914c-1.067.05-1.908.93-1.908 1.998v4.028c0 1.104.896 2 2 2h4.512c1.45 0 2.62.403 3.59 1.24.496.424.748 1.23.748 2.4v61.23c0 1.308-.456 1.753-.608 1.9-.516.506-1.523.61-2.28.61h-5.048c-1.104 0-2 .897-2 2v4.03c0 1.103.896 2 2 2h28.52c1.105 0 2-.897 2-2v-4.03c0-1.102-.897-1.997-2-1.997zM515.454 160.976l-1.934-3.008c-.3-.467-.78-.788-1.325-.887-.545-.096-1.106.033-1.552.364-1.18.878-2.26 1.323-3.21 1.323-.42 0-.88-.106-1.414-.906-.38-.55-.83-1.73-.83-4.236v-27.5c0-4.33-1.833-8.045-5.46-11.055-3.504-2.867-8.538-4.32-14.963-4.32-6.886 0-12.57 1.613-16.895 4.793-4.516 3.32-6.805 7.133-6.805 11.333 0 2.434.8 4.48 2.375 6.076 1.583 1.608 3.57 2.423 5.91 2.423 2.215 0 4.06-.708 5.483-2.104 1.43-1.406 2.155-3.214 2.155-5.373 0-1.556-.634-3.187-1.958-5.014-.537-.716-.76-1.13-.847-1.328.114-.168.45-.557 1.367-1.107 1.94-1.108 4.316-1.67 7.064-1.67 2.887 0 5.177.784 7 2.398 1.75 1.55 2.602 3.345 2.602 5.485v5.855c-9.62 1.237-17.52 3.567-23.5 6.933-6.788 3.82-10.23 8.788-10.23 14.768 0 4.082 1.6 7.475 4.754 10.082 3.042 2.514 7.428 3.788 13.037 3.788 3.893 0 7.303-.668 10.135-1.985 2.266-1.054 4.723-2.856 7.46-5.478 1.115 2.243 2.37 3.905 3.8 5.042 2.02 1.606 4.507 2.422 7.394 2.422 3.73 0 7.14-1.56 10.133-4.633.65-.668.754-1.695.25-2.477zm-42.813-7.89c0-3.307 1.13-5.773 3.44-7.526 3.19-2.378 8.613-4.193 16.14-5.406v4.877c0 4.336-1.336 7.826-4.083 10.67-2.73 2.823-5.854 4.196-9.547 4.196-1.805 0-3.208-.56-4.292-1.708-1.115-1.184-1.657-2.852-1.657-5.1z"})]})]}))}},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(17),r=a.n(s),i=a(18),o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},l=a(0);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{})}),document.getElementById("root")),o()},6:function(e,t,a){"use strict";var n=a(2),c=a(5),s=a(19),r=a.n(s),i=(a(30),a(31),a(32),a(1)),o=a(0);t.a=function(e){var t=e.language,a=void 0===t?"tsx":t,s=e.children,l=Object(c.a)(e,["language","children"]);return Object(i.useEffect)((function(){r.a.highlightAll()}),[]),Object(o.jsx)("pre",Object(n.a)(Object(n.a)({},l),{},{children:Object(o.jsx)("code",{className:"language-".concat(a),children:s})}))}}},[[57,1,2]]]);
//# sourceMappingURL=main.03408c43.chunk.js.map