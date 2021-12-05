import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';
import {addCustomerAction, removeCustomerAction} from './store/reducers/customerReducer';
import { addCashAction, getCashAction } from './store/reducers/cashReducer';
import { fetchCustomers } from './store/asyncActions/fetchCustomers';

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReducer.cash)
    const customers = useSelector(state => state.customerReducer.customers)

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer))
    }

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    return (
        <div className="App">
            <div>{cash}</div>
            <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
            <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
            <button onClick={() => addCustomer(prompt())}>ADD CUSTOMER</button>
            <button onClick={() => dispatch(fetchCustomers())}>GET CUSTOMERS FROM SERVER</button>
            {customers.length > 0
                ? customers.map(customer =>
                    <div
                        onClick={() => removeCustomer(customer.id)}
                        className="customer-wrapper"
                        key={customer.id}>
                        {customer.name}
                    </div>)
                : <div>Customers not found...</div>}
        </div>
    );
}

export default App;
