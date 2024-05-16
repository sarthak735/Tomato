import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)

    const [currState, setCurrState] = useState("Login");

    const [data, setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) =>{
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event) => {
      event.preventDefault();
      let newUrl = url;
      if (currState == "Login") {
        newUrl += "/api/user/login"
      }else{
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl,data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false)
      }else{
        alert(response.data.message);
      }
    }


  return (
    <div className=' absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid '>
      <form onSubmit={onLogin} className=' place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fade '>
        <div className=' flex justify-between items-center text-black '>
            <h2 className='text-[16px] font-medium'>
                {currState}
            </h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className=' w-[16px] cursor-pointer '/>
        </div>
        <div className=' flex flex-col gap-[20px] '>
            {currState === "Login" ? <></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Your name' required className=' outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px] '/>}
           
           <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required className=' outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px] '/> 
           <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required className=' outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px] '/> 
        </div>
        <button type='submit' className=' border-none p-[10px] rounded-[4px] text-white bg-[tomato] text-[15px] cursor-pointer '>{currState === "Sign Up"?"Create account": "Login" }</button>
        <div className=' flex items-center gap-[8px] mt-[-15px] '>
            <input type="checkbox" required  className=' mt-[5px] '/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")} className=' text-[tomato] font-medium cursor-pointer '>Click here</span> </p>:
        <p>Already have an account <span onClick={() => setCurrState("Login")} className=' text-[tomato] font-medium cursor-pointer ' >Login here</span></p> }
        
       
      </form>
    </div>
  )
}

export default LoginPopup
