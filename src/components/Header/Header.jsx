import React from 'react'
import header_img from '../../../public/header_img.png'

const Header = () => {
  return (
    <div className=' h-[34vw] my-[30px] mx-auto bg-[url(/header_img.png)] bg-contain relative'>
      <div className=' absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6%] animate-[fadeIn_3s]'>
        <h2 className=' font-medium text-white text-[max(4.5vw,22px)]'>Order your favourite food here</h2>
        <p className=' text-white text-[1vw]'>Choose froma diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culnary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className= ' border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
