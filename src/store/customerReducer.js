
// const action = {type: '', payload:''}
const defaultState = {
    customers: [
      {id: Date.now()+1, name: 'Robert', lastname: 'Duglas'},
      {id: Date.now()+2, name: 'Denis', lastname: 'Kahovsky'},
      {id: Date.now()+3, name: 'Milana', lastname: 'Socks'},
    ], 
  }
  const ADD_CUSTOMER = "ADD_CUSTOMER";
  const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
    switch(action.type){
      case ADD_CUSTOMER:
        return {...state, customers: [...state.customers, action.payload]}         
      case REMOVE_CUSTOMER:  
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
      default: return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})