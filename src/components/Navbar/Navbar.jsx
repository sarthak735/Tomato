import React, { useState } from 'react'
import {assets} from '../../assets/assets'


const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className=' pt-[20px] pl-[0px] pr-0 flex justify-between items-center'>
      <img src={assets.logo} alt='' className=' w-[150px] '/>
      <ul className=' flex list-none gap-[20px] text-[#49557e] text-[18px]'>
          <li onClick={() => {setMenu("home")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">home {menu === "home"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</li>
          <li onClick={() => {setMenu("menu")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">menu {menu === "menu"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</li>
          <li onClick={() => {setMenu("mobile-app")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">mobile-app {menu === "mobile-app"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</li>
          <li onClick={() => {setMenu("contact-us")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">contact-us {menu === "contact-us"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</li>
      </ul>
      <div className=' flex items-center gap-[40px]'>
        <img src={assets.search_icon} alt=''/>
        <div className=' relative'>
            <img src={assets.basket_icon} alt=''/>
            <div className=' absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]'></div>
        </div>
        <button className=' bg-transparent text-[16px] text-[#49557e] border-solid border-[1px] border-[tomato] py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
