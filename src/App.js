import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import MyButton from './components/UI/Button/MyButton';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  const addCash = (cash) => {
      dispatch({type: "ADD_CASH", payload: cash})

  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <div style={{fontSize: '3rem'}}>{cash}</div>
          <div className='App_btns'>
              <MyButton onClick={()=>addCash(Number(prompt()))}>
                Пополнить счёт
              </MyButton>
              <MyButton onClick={()=>getCash(Number(prompt()))}>
                Снять со счёта
              </MyButton>
          </div>  
      </div>     
    </div>
  );
}

export default App;
