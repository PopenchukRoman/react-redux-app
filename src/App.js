import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import MyButton from './components/UI/Button/MyButton';
import { addCustomerAction } from './store/customerReducer';
import { removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const ADD_CASH = "ADD_CASH";
  const GET_CASH = "GET_CASH";
  
  const addCash = (cash) => {
      dispatch({type: "ADD_CASH", payload: cash})

  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }
  const addCustomer = (fullName) => {
    const customer = {
      id: Date.now(),
       name: fullName.split(' ')[0],
      lastname: fullName.split(' ')[1],
    }
    dispatch(addCustomerAction(customer))
    console.log(customer);
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">     
        <div style={{fontSize: '3rem', marginBottom: 10}}>Баланс: {cash}</div>
          <div className='App_btns'>
              <MyButton onClick={()=>addCash(Number(prompt()))}>
                Пополнить счёт
              </MyButton>
              <MyButton onClick={()=>getCash(Number(prompt()))}>
                Снять со счёта
              </MyButton>
              <MyButton onClick={()=>addCustomer(prompt())}>
                Добавить клиента
              </MyButton>
              <MyButton onClick={()=>removeCustomer(prompt())}>
                Удалить клиента
              </MyButton>
          </div>
          
          {customers.length > 0    
            ? 
          <div style={{fontSize: '3rem'}}>
            
           {customers.map(customer => 
            <div onClick = {() => removeCustomer(customer)} style={{fontSize: '2rem', border: '1px solid black', padding:'10px', marginTop: 5}}>
              {`${customer.name} ${customer.lastname}`}
            </div>
            )}
            
            </div>   
            : 
          <div style={{fontSize: '3rem'}}>Клиенты отсутствуют!</div>
          }

      </div>   
  );
}

export default App;
