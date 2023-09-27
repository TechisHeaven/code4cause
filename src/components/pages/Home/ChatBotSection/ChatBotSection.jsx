import React from "react";
import MicSoundSvg from "./MicSoundSvg";

const ChatBotSection = () => {
  return (
    <div className="rounded-xl chatBotSection bg-background overflow-hidden flex  flex-col items-center outline outline-2 shadow-2xl shadow-secondary/70 hover:shadow-secondary/80 transition-all outline-secondary m-auto max-w-[1028px]">
      <div className="header bg-primary p-4 w-full"></div>
      <div className="image w-[400px] aspect-square py-4">
        <img src="./doctor.png" alt="doctor" />
      </div>
      <div className="relative w-full m-4">
        <div className="bottom-chat absolute bottom-0 left-[50%] translate-x-[-50%] max-w-[480px]  m-auto bg-textMain/30 w-full flex justify-between items-center rounded-full">
          <p className="mx-4 font-medium select-none">Get started to chat</p>
          <div className="p-2 bg-primary m-2 rounded-full">
            <MicSoundSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotSection;
