import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ChatBotSection from "./ChatBotSection/ChatBotSection";
import BackgroundCircle from "./BackgroundCircle/BackgroundCircle";
import HowWork from "./HowWork/HowWork";
import PreFooter from "./PreFooter/PreFooterSection";

const index = () => {
  return (
    <>
      <div className="max-w-[1280px] m-auto">
        <HeroSection />
        <div className="relative">
          <ChatBotSection />
          <BackgroundCircle />
        </div>
        <HowWork />
        <PreFooter />
      </div>
    </>
  );
};

export default index;
