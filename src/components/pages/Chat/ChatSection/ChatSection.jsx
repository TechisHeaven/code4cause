import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../../store";
import { showToast } from "../../../utils/Toast";

const ChatSection = ({ selectedTab }) => {
  const chatContainerRef = useRef(null);
  const [chat, setChat] = useState([]);
  const { user } = useStateContext();

  useEffect(() => {
    // Scroll to the bottom when the component first mounts or when chat messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  useEffect(() => {
    if (user && user.user && user.user.id) {
      let userID = user.user.id;
      // let url =
      //   import.meta.env.VITE_AXIOS_URL +
      //   "chat?SenderId=" +
      //   selectedTab +
      //   "&ReceiverId=" +
      //   userID;
      let url = `http://localhost:3000/chat?SenderId=${selectedTab}&ReceiverId=${userID}&SenderId=${userID}&ReceiverId=${selectedTab}`;
      axios
        .get(url)
        .then((value) => {
          if (value.status === 200) {
            setChat(value.data);
          }
        })
        .catch((err) => {
          showToast(err.message + " Chat", "error");
        });
    }
  }, [selectedTab, user]);

  const messagesFromSelectedSender = chat.filter(
    (item) => item.SenderId === selectedTab
  );

  return (
    <div
      ref={chatContainerRef}
      className="max-w-[1026px] h-[80vh]  overflow-y-auto w-full scroll-smooth overflow-hidden"
    >
      <div
        className={`message-area ${
          chat.length > 6 ? " h-auto" : "h-full"
        } flex w-full gap-4 justify-end flex-col`}
      >
        {selectedTab ? (
          messagesFromSelectedSender.length > 0 ? (
            chat.map((item) => {
              return (
                <div key={item.Chatid}>
                  {item.SenderId === selectedTab ? (
                    <div className="SenderMessage m-2 max-w-[600px] flex items-center">
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
                    <div className="ReceiverMessage m-4 ml-auto flex-col-reverse max-w-[600px] flex items-center">
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
            })
          ) : (
            <div
              className="h-[calc(100vh-300px)] grid place-items-center text-2xl  
          capitalize text-textSecondary"
            >
              blank messages
            </div>
          )
        ) : (
          <div
            className="h-[calc(100vh-300px)] grid place-items-center text-2xl  
          capitalize text-textSecondary"
          >
            please select conversation
          </div>
        )}
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
