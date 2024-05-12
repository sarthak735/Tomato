import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className=' flex items-start justify-between gap-[50px] mt-[100px] '>
      <div className=' w-[100%] max-w-[max(30%,500px)] '>
        <p className=' text-[30px] font-semibold mb-[50px] '>Delivery Information</p>
        <div className=' flex gap-[10px] '>
          <input type="text" placeholder='First Name' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
          <input type="text" placeholder='Last Name' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        </div>
        <input type="email" placeholder='Email Address' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        <input type="text" placeholder='Street' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        <div className=' flex gap-[10px] '>
          <input type="text" placeholder='City' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
          <input type="text" placeholder='State' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        </div>
        <div className=' flex gap-[10px] '>
          <input type="text" placeholder='Zip Code' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
          <input type="text" placeholder='Country' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] '/>
        </div>
        <input type="text" placeholder='Phone' className=' mb-[15px] w-[100%] p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' />
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
            <button  className=' border-none text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] rounded-[4px] cursor-pointer mt-[30px] '>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
