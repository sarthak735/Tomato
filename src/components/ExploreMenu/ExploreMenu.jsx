import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    // const[foodcategory, setFoodCategory] = useState("");
  return (
    <div className=' flex flex-col gap-[20px]'>
      <h1 className=' text-[#262626] font-medium text-[30px]'>Explore our menu</h1>
      <p className=' max-w-[60%] text-neutral-800 font-normal'>Choose froma diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culnary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className=' flex justify-between items-center gap-[30px] text-center my-[20px] mx-[0px] overflow-x-scroll no-scrollbar'>
        {menu_list.map((item,index) =>{
            return (
                <div onClick={() => setCategory(prev => prev === item.menu_name ? "All": item.menu_name)} key={index}>
                    <img src={item.menu_image} alt='' className=' w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-all active:border-[4px] active:border-solid active:border-[tomato] active:p-[2px]'/>
                    <p className=' mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr className=' my-[10px] mx-[0px] h-[2px] bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu
