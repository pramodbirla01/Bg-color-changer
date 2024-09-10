import { useState } from "react"

function MyApp() {
const [color,setColor]=useState("purple")
  return(
  <div className="h-screen w-full" style={{backgroundColor:color}}>

   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  py-5 mx-24 rounded-lg">
    <div className="flex flex-wrap justify-center gap-3 bg-white px-5 py-2 rounded-lg">
      <button onClick={()=>setColor("red")} className="bg-red-500 px-3 py-1 text-white rounded">Red color</button>
      <button onClick={()=>setColor("blue")} className="bg-blue-500 px-3 py-1 text-white rounded">sky blue</button>
      <button onClick={()=>setColor("green")} className="bg-green-500 px-3 py-1 text-white rounded">green</button>
      <button onClick={()=>setColor("pink")} className="bg-pink-500 px-3 py-1 text-white rounded">pink</button>
      <button onClick={()=>setColor("black")}   className="bg-black px-3 py-1 text-white rounded">black</button>
    </div>
   </div>

  </div>
  );
}

export default MyApp;


