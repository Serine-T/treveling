import { useState } from 'react';
import Cart from './component/Main/index';
import data from "./data";
const App = () =>{ 
  const [list, setList] = useState(data);
  const handleRefresh =() => {
    setList(data)
  }

  const handleNotInterested =(id) => {
    const newList  = list.filter(item => item.id !== id);
    setList(newList)
  }
  return (
  <div className='test'>
    {
      list.length ?  list.map((cart) =>{
        return  <Cart key={cart.id} info={cart} handleNotInterested={handleNotInterested} />
      }) : (
        <div>
          No Tours Left
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      )
    }
  </div>
)}
export default App;
