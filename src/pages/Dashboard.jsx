import React from "react";
import logo from "../images/icons8-k-32.png";
import { CiLogout } from "react-icons/ci";
import { BsCameraVideo } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { BsPaperclip, BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";
import ariana from "../images/ariana.png";
import { contacts } from "../data/contacts";

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
            <Link className="self-center" to="/">
              <div
                className="cursor-pointer flex items-center justify-between bg-dark hover:bg-darker 
            rounded-md px-3 hover:text-white text-black h-10 self-center mr-1"
              >
                <CiLogout className="self-center mr-2" />
                <p>Log out</p>
              </div>
            </Link>
          </div>
          {contacts.map((contact) => {
            return (
              <div className="flex items-center p-3 hover:bg-dark">
                <div className="w-[5rem] h-[5rem] mr-[1rem]">
                  <img
                    className="w-[5rem] h-[5rem] object-cover rounded-[50%]"
                    src={contact.image}
                    alt="araiana"
                  />
                </div>
                <div>
                  <p className="text-[1.2rem]">{contact.name}</p>
                  <p>{contact.message}</p>
                </div>
              </div>
            );
          })}

        </div>

        {/* --------------------------RIGHT PANE--------------------------------- */}
        <div className="flex-[2]">
          <div className="flex justify-between bg-dark h-[4rem]">
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

          <div className="h-[90%] overflow-y-scroll">MESSAGE HERE</div>

          <div className="flex bg-gray h-[3rem] self-end items-center">
            <BsPaperclip className="" size={25} />
            <textarea
              className="resize-none overflow-hidden"
              name=""
              id=""
              cols="30"
              rows="1"
              placeholder="Write a message..."
            ></textarea>
            <BsCardImage size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
