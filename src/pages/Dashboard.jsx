import React from "react";
import logo from "../images/icons8-k-32.png";
import { CiLogout } from "react-icons/ci";
import { BsCameraVideo } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { BsPaperclip, BsCardImage } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center bg-slate-200 w-[100vw] h-[100vh] font-poppins">
      <div className="overflow-hidden flex bg-lightest w-[90%] h-[90%] rounded-lg">
        <div className="header bg-lighter flex-[1] ">
          <div
            className="bg-light text-white flex p-2 justify-between
          h-[4rem]"
          >
            <img
              className="ml-1 cursor-pointer h-10 w-10 self-center"
              src={logo}
              alt="logo"
            />
            <p className="self-center font-bold text-[1.2rem]">Selena</p>
            <div
              className="cursor-pointer flex items-center justify-between bg-dark hover:bg-darker 
            rounded-md px-3 text-white h-10 self-center mr-1"
            >
              <CiLogout className="self-center mr-2" />
              <p>Log out</p>
            </div>
          </div>

          <div className="">chats</div>
        </div>
        <div className="flex-[2]">
          <div className="flex justify-between bg-dark h-[7.8vh]">
            <div
              className="flex items-center ml-[1.5rem] font-bold text-[1.15rem]
            text-white"
            >
              <h1>Ariana Grande</h1>
            </div>
            <div className="flex justify-evenly items-center w-[10rem]">
              <BsCameraVideo size={23} className="" />
              <BsTelephone size={20} className="" />
              <SlOptionsVertical size={20} className="" />
            </div>
          </div>

          <div className="h-[80%] overflow-y-scroll">MESSAGE HERE</div>

          <div className="flex  bg-white">
            <input
              className="h-[11.1%]
            w-[80%] text-[1.1rem]"
              type="text"
              placeholder="Type something..."
            />
            <div className="flex justify-center items-center">
              <div>
                <BsCardImage size={25} />
              </div>
              <div>
                <BsPaperclip className="" size={25} />
              </div>
            </div>
            <div className="bg-darker">
              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
