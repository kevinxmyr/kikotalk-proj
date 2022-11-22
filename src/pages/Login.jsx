import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ReactDOM from 'react-dom'
import Signup from "./Signup";

// IM FROM MY MACBOOK!

export default function Login(props) {
  const [seePassword, setSeePassword] = useState(true);
  const [mayText, setMaytext] = useState("");
  // const [openModal, setOpenmodal] = useState(false)

  const seePasswordFunc = () => {
    return setSeePassword(!seePassword);
  };

  const typeFunc = (e) => {
    return setMaytext(e.target.value);
  };

  return (
    <div
      className='py-5 flex flex-col items-center
    min-h-[100vh] bg-gray'>

      {/* <div className={openModal ? 'block' : 'hidden'}>

      </div> */}


      <style>{`
        .box-shadow {
          -webkit-box-shadow: 1px 3px 14px 5px rgba(0, 0, 0, 0.22);
          -moz-box-shadow: 1px 3px 14px 5px rgba(0, 0, 0, 0.22);
          box-shadow: 1px 3px 14px 1px rgba(0, 0, 0, 0.14);
        }
        .inset-shadow {
          // -webkit-box-shadow: inset 0px 0px 23px -13px rgba(0,0,0,0.75);
          // -moz-box-shadow: inset 0px 0px 23px -13px rgba(0,0,0,0.75);
          box-shadow: inset 0px 0px 2px 1px rgba(0, 0, 0, 0.04);
          border: 1px solid #e3e3e3;
        }
        .opacity {
          opacity: 0.3;
        }
        .pangsemantic {
          height: 3.1rem !important;
          width: 13rem !important;
          padding: 10px !important;
          margin: 1.5rem !important;
          background-color: #2cb22c !important;
          color: white !important;
        }
        .pangsemantic:hover {
          background-color: #269d26 !important;
        }
      `}</style>
      {/* KIKOTALK LOGO AND PARAGRAPH */}
      <div className='2xl:grid 2xl:grid-cols-2 xl:justify-items-center flex flex-col items-center'>
        <div className='font-bold text-[3.5rem] text-[#0073AA]'>
          <p className='font-alex'>KikoTalk</p>
        </div>
        <div className='text-center max-w-[65%] bg-red'>
          <p className='text-[1.4rem]'>
            Talk with friends and the world around you on KikoTalk.
          </p>
        </div>
      </div>

      {/* ----------- CONTAINER OF INPUTS ----------- */}
      <div
        className='
        mt-[2rem] 
        bg-white 
        pt-5 
        box-shadow 
        h-[330px] 
        rounded-xl 
        w-[400px]
         flex 
         flex-col 
         items-center 
         text-center'>
        {/* EMAIL PHONE NUMBER */}
        <div className='bg-slate-00 w-[100%]'>
          <input
            className='p-3 text-[1.1rem] w-[90%] rounded-md ring-1 ring-gray-300 inset-shadow'
            type='email'
            placeholder='E-mail or phone number'
            required
          />
        </div>
        {/* PASSWORD */}
        <div className='mt-[1rem] w-[100%] relative'>
          <input
            onChange={typeFunc}
            className='p-3 text-[1.1rem] rounded-md ring-1 ring-gray-300 w-[90%] inset-shadow'
            type={seePassword ? "password" : "text"}
            placeholder='Password'
            required
          />
          {mayText.length ? (
            <span
              onClick={seePasswordFunc}
              className='absolute top-[14px] opacity-[.5] right-10
              hover:cursor-pointer hover:bg-slate-300 hover:rounded-full'>
              {seePassword ? (
                <AiOutlineEye size={20} />
              ) : (
                <AiOutlineEyeInvisible size={20} />
              )}
            </span>
          ) : null}
        </div>

        {/* LOG IN BUTTON */}
        <button
          className='mt-[1rem] 
         bg-[#0073AA] 
         text-white 
         w-[90%] 
         p-[.7rem] 
         rounded-md 
         mx-[auto]
         font-bold 
         text-[1.1rem]
         hover:bg-hoverblue
         transition-all'>
          <div className=''>Log In</div>
        </button>

        {/* FORGOT PASSWORD */}
        <div className='mt-[1.1rem]'>
          <a className='text-cyan-700 text-[.94rem]' href='#'>
            Forgot password?
          </a>
        </div>

        {/* HORIZONTAL LINE */}
        <div className='w-[90%] mx-[auto] mt-4 opacity'>
          <hr className='opacity' />
        </div>

        {/* SIGN UP BUTTON */}
        <div className="mt-7">
          <Signup />
        </div>
        {/* <div
          onClick={showSignupModal}
          className='bg-green transition-all hover:cursor-pointer hover:bg-hovergreen w-[50%] mx-[auto] rounded-md py-3 mt-8'
          to='/signup'>
            
          <button className='font-bold text-white'>Create new account</button>
        </div> */}
        
        {/* END OF CONTAINER */}
      </div>

      {/* Terms and condition */}
      <div className='mt-[1.4rem]'>
        <p>
          Click{" "}
          <a className='hover:text-cyan-500 hover:underline font-bold' href='#'>
            here
          </a>{" "}
          to read Terms & Conditions
        </p>
      </div>

    </div>
  );
}
