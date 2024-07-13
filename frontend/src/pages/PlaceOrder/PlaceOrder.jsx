import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext);

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  }

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input onChange={onChangeHandler} name='firstName' value={data.firstName} type="text" placeholder='First name' />
          <input onChange={onChangeHandler} name='lastName' value={data.lastName} type="text" placeholder='Last name' />
        </div>
        <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Email address' />
        <input onChange={onChangeHandler} name='street' value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input onChange={onChangeHandler} name='city' value={data.city} type="text" placeholder='City' />
          <input onChange={onChangeHandler} name='state' value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input onChange={onChangeHandler} name='zipcode' value={data.zipcode} type="text" placeholder='Zip Code' />
          <input onChange={onChangeHandler} name='country' value={data.country} type="text" placeholder='Country' />
        </div>
        <input onChange={onChangeHandler} name='phone' value={data.phone} type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount()?40:0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs {getTotalCartAmount()?getTotalCartAmount()+40:0}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder