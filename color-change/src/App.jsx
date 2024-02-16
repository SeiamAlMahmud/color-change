
import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}></div>
      <div className='fixed justify-center flex bottom-12 flex-wrap inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white rounded-3xl px-3 py-2">
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Green" }}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Blue" }}>Blue</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Purple" }}>Purple</button>
          <button onClick={() => setColor("Seagreen")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Seagreen" }}>Seagreen</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "yellow" }}>yellow</button>
          <button onClick={() => setColor("White")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "White" }}>White</button>
          <button onClick={() => setColor("#000")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "#000" }}>black</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "orange" }}>orange</button>
          <button onClick={() => setColor("chocolate")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "chocolate" }}>chocolate</button>

        </div>
      </div>

    </>
  )
}

export default App
