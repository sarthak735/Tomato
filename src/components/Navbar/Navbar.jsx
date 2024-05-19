import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

  const navigate  = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  const dot = "absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"

  return (
    <div className=' pt-[20px] pl-[0px] pr-0 flex justify-between items-center'>
      <Link to='/'> <img src={assets.logo} alt='' className=' w-[150px] max-[1050px]:w-[140px] max-[900px]:w-[120px] '/></Link>
      <ul className=' flex list-none gap-[20px] text-[#49557e] text-[18px] max-[1050px]:gap-[20px] max-[1050px]:text-[17px] max-[900px]:gap-[15px] max-[900px]:text-[16px] max-[750px]:hidden  '>
          <Link to='/' onClick={() => {setMenu("home")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">home {menu === "home"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</Link>
          <a href='#explore-menu' onClick={() => {setMenu("menu")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">menu {menu === "menu"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</a>
          <a href='#app-download' onClick={() => {setMenu("mobile-app")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer scroll-smooth">mobile-app {menu === "mobile-app"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</a>
          <a href='#footer' onClick={() => {setMenu("contact-us")}} className=" flex flex-col items-center justify-center gap-1 cursor-pointer">contact-us {menu === "contact-us"?<hr className=" border-none w-4/5 h-1 rounded-lg bg-[#49557e]"/>:<></>}</a>
      </ul>
      <div className=' flex items-center gap-[40px] max-[1050px]:gap-[30px] max-[900px]:gap-[20px]'>
        <img src={assets.search_icon} alt='' className='max-[1050px]:w-[22px] max-[900px]:w-[20px]'/>
        <div className=' relative '>
            <Link to="/cart"><img src={assets.basket_icon} alt='' className='max-[1050px]:w-[22px] max-[900px]:w-[20px]'/></Link>
            <div className={getTotalCartAmount() ===0?"": `${dot}`}></div>
        </div>
        {!token?<button onClick={() => setShowLogin(true)} className=' bg-transparent text-[16px] text-[#49557e] border-solid border-[1px] border-[tomato] py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition max-[1050px]:py-[8px] max-[1050px]:px-[25px] max-[900px]:py-[7px] max-[900px]:px-[20px] max-[900px]:text-[15px] '>Sign in</button>
        :<div className=' relative group '>
            <img src={assets.profile_icon} alt="" className='max-[1050px]:w-[22px] max-[900px]:w-[20px]'/>
            <ul className=' absolute hidden group-hover:block right-0 z-[1] group-hover:flex-col group-hover:gap-[10px] group-hover:bg-[#fff2ef] group-hover:py-[12px] group-hover:px-[25px] group-hover:rounded-[4px] group-hover:border group-hover:border-solid group-hover:border-[tomato] group-hover:outline-[2px] group-hover:outline group-hover:outline-white group-hover:list-none '>
              <li onClick={() => navigate("/myorders")} className=' flex items-center gap-[10px] px-[20px] pl-0 pb-[4px] cursor-pointer hover:text-[tomato] '><img src={assets.bag_icon} alt="" className=' w-[20px] '/><p>Orders</p></li>
              <hr />
              <li onClick={logout} className=' flex items-center gap-[10px] px-[20px] pl-0 pb-[4px] cursor-pointer hover:text-[tomato]'><img src={assets.logout_icon} alt="" className=' w-[20px] '/><p>Logout</p></li>
            </ul>
          </div>}
        
      </div>
    </div>
  )
}

export default Navbar
