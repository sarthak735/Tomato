import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className=" text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]"
      id="footer"
    >
      <div className=" w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[80px] ">
        <div className=" flex flex-col items-start gap-[20px] ">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
            expedita dolorum quod temporibus earum nemo nesciunt dolore ducimus
            id? Culpa laboriosam cupiditate nesciunt, quaerat saepe eius laborum
            sapiente quos.
          </p>
          <div className=" flex">
            <img
              src={assets.facebook_icon}
              alt=""
              className=" w-[40px] mr-[15px] cursor-pointer"
            />
            <img
              src={assets.twitter_icon}
              alt=""
              className=" w-[40px] mr-[15px] cursor-pointer"
            />
            <img
              src={assets.linkedin_icon}
              alt=""
              className=" w-[40px] mr-[15px] cursor-pointer"
            />
          </div>
        </div>
        <div className=" flex flex-col items-start gap-[20px] ">
          <h2 className=" text-white text-[25px] font-medium ">COMPANY</h2>
          <ul>
            <li className=" list-none mb-[10px] cursor-pointer ">Home</li>
            <li className=" list-none mb-[10px] cursor-pointer ">About us</li>
            <li className=" list-none mb-[10px] cursor-pointer ">Delivery</li>
            <li className=" list-none mb-[10px] cursor-pointer ">
              Privacy policy
            </li>
          </ul>
        </div>
        <div className=" flex flex-col items-start gap-[20px] ">
          <h2 className=" text-white text-[25px] font-medium ">GET IN TOUCH</h2>
          <ul>
            <li className=" list-none mb-[10px] ">+91-7354166338</li>
            <li className=" list-none mb-[10px]  ">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className=" w-[100%] h-[2px] my-[20px] mx-[0px] border-none bg-gray-500 " />
      <p>Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
