import React from "react";
import profilePic from "../assets/profilePic.png";

const CardPreview = ({cardData}) => {
  return (
    <div className="bg-[#FFFAED] w-[40vw] p-[5vw] rounded-[2vw] shadow-lg">
      <div className="relative w-[30vw] h-[30vw]">
        <img
          src={profilePic}
          alt="profilePic"
          className="w-full h-full object-cover rounded-xl border-4 border-[#F84998]"
        />
      </div>

      <h1 className="melodrame text-[8vw] font-medium leading-11">
        {cardData.name}
      </h1>

      <div className="grid grid-cols-2 gap-4 w-full">
        <span className="bg-[#F84998] py-3 px-6 rounded-[1vw] text-[#FFFAED] font-semibold text-[2vw]">
          {cardData.dob}
        </span>
        <span className="bg-[#F84998] py-3 px-6 rounded-[1vw] text-[#FFFAED] font-semibold text-[2vw]">
          {cardData.job}
        </span>
        <span className="bg-[#F84998] py-3 px-6 rounded-[1vw] text-[#FFFAED] font-semibold text-[2vw]">
          {cardData.superpower}
        </span>

        <div className="flex justify-start gap-8 text-center">
          <div className="bg-[#F84998] rounded-full w-[6vw] h-[6vw] flex items-center justify-center"></div>
          <div className="bg-[#F84998] rounded-full w-[6vw] h-[6vw] flex items-center justify-center"></div>
          <div className="bg-[#F84998] rounded-full w-[6vw] h-[6vw] flex items-center justify-center"></div>
        </div>

        <div className="bg-[#F84998] py-3 px-6 rounded-[1vw] text-[#FFFAED] font-semibold text-[2vw]">
          {cardData.bio}
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
