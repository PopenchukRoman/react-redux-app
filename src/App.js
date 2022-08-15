import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  const addCash = () => {
      dispatch({type: "ADD_CASH", payload: 5})

  }
  const getCash = () => {
    dispatch({type: "GET_CASH", payload: 5})
  }

  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <div style={{fontSize: '3rem'}}>{cash}</div>
          <button onClick={()=>addCash()}>Пополнить счет</button>
          <button onClick={()=>getCash()}>Снять со счета</button>
      </div>     
    </div>
  );
}

export default App;
