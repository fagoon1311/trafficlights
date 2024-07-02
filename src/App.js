
import './App.css';
import {useState, useEffect} from 'react'
function App() {
  const config = {
    red:{
      color:"red",
      duration:4000,
      next:"yellow"
    },
    yellow:{
      color:"yellow",
      duration:4000,
      next:"green"
    },
    green:{
      color:"green",
      duration:4000,
      next:"red"
    }
  }

  const [color, setColor] = useState('red')
  useEffect(()=>{
    const { duration, next } = config[color]
    const timerid = setTimeout(()=>{
      setColor(next)
      console.log(color)
    }, duration)

    return ()=>{
      clearTimeout(timerid)
    };
  },[color])
  
  const colors = ['red', 'yellow', 'green'];

  const colorClasses = {
    red: color === 'red' ? 'bg-red-600' : 'bg-slate-100',
    yellow: color === 'yellow' ? 'bg-yellow-400' : 'bg-slate-100',
    green: color === 'green' ? 'bg-green-600' : 'bg-slate-100',
  };

  return (
    <div className="App flex items-center justify-center h-screen">
      <div className="w-[10rem] border rounded-md h-[25rem] bg-black grid grid-rows-3 p-2">
        {colors.map((clr) => (
          <div key={clr} className="flex items-center justify-center">
            <div className={`${colorClasses[clr]} rounded-full h-24 w-24`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
