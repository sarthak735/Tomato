import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);
  const dot = "absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"

  return (
    <div className=' pt-[20px] pl-[0px] pr-0 flex justify-between items-center'>
      <Link to='/'> <img src={assets.logo} alt='' className=' w-[150px] '/></Link>
      <ul className=' flex list-none gap-[20px] text-[#49557e] text-[18px]'>
          <Link to='/' onClick={() => {setMenu("home")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">home {menu === "home"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</Link>
          <a href='#explore-menu' onClick={() => {setMenu("menu")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">menu {menu === "menu"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</a>
          <a href='#app-download' onClick={() => {setMenu("mobile-app")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer scroll-smooth">mobile-app {menu === "mobile-app"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</a>
          <a href='#footer' onClick={() => {setMenu("contact-us")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">contact-us {menu === "contact-us"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</a>
      </ul>
      <div className=' flex items-center gap-[40px]'>
        <img src={assets.search_icon} alt=''/>
        <div className=' relative'>
            <Link to="/cart"><img src={assets.basket_icon} alt=''/></Link>
            <div className={` getTotal ===0?"": ${dot}`}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className=' bg-transparent text-[16px] text-[#49557e] border-solid border-[1px] border-[tomato] py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
