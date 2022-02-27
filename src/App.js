import { useDispatch, useSelector } from 'react-redux';
import { incNumber,decNumber } from './actions';
import './App.css';

function App() {
 const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch()
  return (
    <>
   
      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a href="#" className="quantity__minus" title="Decrement" onClick={()=>dispatch(decNumber())} ><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={myState}/>
        <a href="#" className="quantity__plus" title="Increment" onClick={()=>dispatch(incNumber())} ><span>+</span></a>
      </div>
  
        </div>  
        
    </>
  );
}

export default App;

