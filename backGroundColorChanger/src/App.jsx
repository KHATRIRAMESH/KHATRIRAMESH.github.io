import { useState } from "react";

function App() {
  const [color, setColor] = useState("#fff");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("magenta")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
