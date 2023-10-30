import './App.css';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className='quantity'>
          <a className='quantity__minus' title='Decrement'><span> - </span></a>
          <input name="quantity" type="text" className='quantity__input' value="0" />
          <a className='quantity__plus' title="Increment"><span> + </span></a>
        </div>
      </div>
    </>
  );
}

export default App;
