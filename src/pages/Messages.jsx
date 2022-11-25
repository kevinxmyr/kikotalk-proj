import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { BsPaperclip, BsCardImage } from "react-icons/bs";

const Messages = () => {
  return (
    <div>
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

      <div className="h-[90%] overflow-y-scroll">
        <div></div>
      </div>

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
  );
};

export default Messages;
