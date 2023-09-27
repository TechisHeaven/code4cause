import React, { useEffect, useRef } from "react";

const ChatSection = () => {
  const chat = [
    {
      id: 1,
      message: "Hello! How can I assist you today?",
      type: "bot",
    },
    {
      id: 2,
      message:
        " Hi there. I've been having some persistent headaches lately, and I'm not sure what's causing them.",
      type: "user",
    },
    {
      id: 3,
      message:
        "I'm sorry to hear that you're experiencing headaches. I'd like to help. Can you provide me with some more information? When did the headaches start, and have you noticed any patterns or triggers?",
      type: "bot",
    },
    {
      id: 4,
      message:
        "The headaches began about two weeks ago. They seem to occur mostly in the afternoon, and I can't pinpoint any specific triggers.",
      type: "user",
    },
    {
      id: 5,
      message:
        "Thank you for sharing that information. It's helpful to know when they started and the timing. Have you experienced any other symptoms along with the headaches, such as nausea, sensitivity to light, or changes in vision?",
      type: "bot",
    },
    {
      id: 6,
      message:
        "The headaches began about two weeks ago. They seem to occur mostly in the afternoon, and I can't pinpoint any specific triggers.",
      type: "user",
    },
    {
      id: 7,
      message:
        "The headaches began about two weeks ago. They seem to occur mostly in the afternoon, and I can't pinpoint any specific triggers.",
      type: "user",
    },
    {
      id: 8,
      message:
        "The headaches began about two weeks ago. They seem to occur mostly in the afternoon, and I can't pinpoint any specific triggers.",
      type: "user",
    },
    {
      id: 9,
      message:
        "The headaches began about two weeks ago. They seem to occur mostly in the afternoon, and I can't pinpoint any specific triggers.",
      type: "user",
    },
    {
      id: 10,
      message:
        "The headaches began about two weeks ago. They seem to occur mostly in the afternoon, and I can't pinpoint any specific triggers.",
      type: "user",
    },
  ];
  // const chat = [
  //   {
  //     id: 1,
  //     message: "Hello! How can I assist you today?",
  //     type: "bot",
  //   },
  // ];
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when the component first mounts or when chat messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div
      ref={chatContainerRef}
      className="max-w-[1026px] overflow-y-scroll h-[calc(100vh-221px)] w-full relative scroll-smooth"
    >
      <div
        className={`message-area ${
          chat.length > 6 ? " h-auto" : "h-full"
        } flex w-full gap-4 justify-end flex-col`}
      >
        {chat.map((item) => {
          return (
            <div key={item.id}>
              {item.type === "bot" ? (
                <div className="BotMessage m-2 max-w-[600px] flex items-center">
                  <div className="flex items-center gap-4">
                    <img
                      className="h-8 w-8 flex-none rounded-full bg-gray-50"
                      src="./vite.svg"
                      alt="chatbot"
                    />
                    <p className="message mr-auto p-2 px-4 max-w-[600px] bg-gray-200 border rounded-md">
                      {item.message}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="UserMessage m-4 ml-auto flex-col-reverse max-w-[600px] flex items-center">
                  <div className="flex items-center gap-4">
                    <p className="message ml-auto bg-primary text-white rounded-md p-2 px-4">
                      {item.message}
                    </p>
                    <img
                      className="h-8 w-8 flex-none rounded-full bg-gray-100"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="chatbot"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="chatbox items-center justify-center flex gap-2 bg-white sticky bottom-0 border-t-2 p-4 w-full">
        <input
          type="text"
          placeholder="Send a message..."
          className="p-2 border w-full max-w-[748px] rounded-md"
        />
        <button className="bg-primary rounded-md text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              className="text-background"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
