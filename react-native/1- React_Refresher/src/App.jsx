import {useState , useContext } from 'react'
import './App.css'
import CountContext from './contexts/CountContext';


const Level4 = () => {
  const { count  , setCount} = useContext(CountContext);
   console.log("count", count);
  return (
   <p>level 4</p>
  )
}

const Level3 = () => {
  return (
    <Level4 />
  )
}


const Level2 = () => {
  return (
    <Level3 />
  )
}


const Level1 = () => {
  return  (
    <Level2 />
  )
}


const Count = () => {
  const [count , setCount] = useState(0);

  return  (
  <p onClick={() => setCount(count + 1)}>
    Count: {count} 
  </p>
  );
}



function App() {
  const { count } = useContext(CountContext);
  
  return (
    <div>
     <Level1 />
     <Count>
      <p>hisdsad</p>
     </Count>
    </div>
  )
}

export default App
