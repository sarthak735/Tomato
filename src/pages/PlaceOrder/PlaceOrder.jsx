import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const {getTotalCartAmount,token, food_list,cartItems,url} = useContext(StoreContext)

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
    setData(data => ({...data,[name]:value}))
  } 

  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) =>{
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount() + 2,

    }
    let response = await axios.post(url+"/api/order/place", orderData,{headers:{token}})
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error"); 
    }
  }
  const navigate = useNavigate()

  useEffect(() =>{
    if (!token) {
      navigate("/cart")
    }else if(getTotalCartAmount() === 0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className=' flex items-start justify-between gap-[50px] mt-[100px] '>
      <div className=' w-[100%] max-w-[max(30%,500px)] '>
        <p className=' text-[30px] font-semibold mb-[50px] '>Delivery Information</p>
        <div className=' flex gap-[10px] '>
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        <div className=' flex gap-[10px] '>
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        </div>
        <div className=' flex gap-[10px] '>
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip Code' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' />
      </div>
      <div className=' w-[100%] max-w-[max(40%,500px)]'>
        <div className=' flex-1 flex flex-col gap-[20px] '>
            <h2 className='text-[30px] font-semibold mb-[50px] '>Cart Total</h2>
            <div>
              <div className=' flex justify-between text-[#555] '>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className=' my-[10px] ' />
              <div className=' flex justify-between text-[#555] '>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0?0:2}</p>
              </div>
              <hr className=' my-[10px] '/>
              <div className=' flex justify-between text-[#555] '>
                <p>Total</p>
                <p>${getTotalCartAmount() === 0?0:getTotalCartAmount() + 2}</p>
              </div>
            </div>
            <button type='submit'  className=' border-none text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] rounded-[4px] cursor-pointer mt-[30px] '>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
