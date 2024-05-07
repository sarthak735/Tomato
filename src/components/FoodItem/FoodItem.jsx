import React, { useContext} from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className=" w-[100%] m-auto rounded-[15px] shadow-[0px_0px_10px_rgba(0,0,0,0.08)] transition animate-[fadeIn_1s] ">
      <div className=" relative">
        <img
          src={image}
          alt=""
          className=" w-[100%] rounded-[15px_15px_0px_0px] "
        />
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
            className=" w-[35px] absolute bottom-[15px] right-[15px] rounded-[50%] cursor-pointer "
          />
        ) : (
          <div className=" absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white ">
            <img
              className=" w-[30px] cursor-pointer"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className=" w-[30px] cursor-pointer "
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className=" p-[20px]">
        <div className=" flex justify-between items-center mb-[10px]">
          <p className=" text-[20px] font-medium ">{name}</p>
          <img src={assets.rating_starts} alt="" className=" w-[70px] " />
        </div>
        <p className=" text-[#676767] text-[12px] ">{description}</p>
        <p className=" text-[tomato] text-[22px] font-medium my-[10px] mx-[0px]  ">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
