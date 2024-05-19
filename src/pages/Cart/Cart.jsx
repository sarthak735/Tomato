import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className=' mt-[100px]'>
      <div>
        <div className=' grid grid-cols-[_1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-neutral-400 text-[max(1vw,12px)] '>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='h-[1px] bg-[#e2e2e2] border-none' />
        {food_list.map((item, index) => {
          if(cartItems[item._id] > 0){
            return(
              <>
              <div className=' grid grid-cols-[_1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-black text-[max(1vw,12px)] mt-[10px]'>
                <img src={url + "/images/"+item.image} alt="" className=' w-[70px]'/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className=' cursor-pointer '>x</p>
              </div>
              <hr className=' mt-[4px] h-[1px] bg-[#e2e2e2] border-none '/>
              </>
            )
          }
          
        })}
      </div>
      <div className=' mt-[80px] flex justify-between gap-[max(12vw,20px)] max-[750px]:flex-col-reverse '>
        <div className=' flex-1 flex flex-col gap-[20px] '>
          <h2>Cart Total</h2>
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
              <p>${getTotalCartAmount() === 0 ? 0:getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className=' border-none text-white bg-[tomato] w-[max(15vw,200px)] py-[12px] rounded-[4px] cursor-pointer '>PROCEED TO CHECKOUT</button>
        </div>
        <div className=' flex-1'>
          <div className=' max-[750px]:justify-start'>
            <p className=' text-[#555] '>If you have a promo code, Enter it here</p>
            <div className=' mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px] '>
              <input type="text" placeholder='promo code' className=' bg-transparent border-none outline-none pl-[10px] '/>
              <button className=' w-[max(10vw,150px)] py-[12px] px-[5px] bg-black border-none text-white rounded-[4px] '>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
