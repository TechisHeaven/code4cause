import axios from "axios";
import { useStateContext } from "../../../../store";
import React, { useEffect, useState } from "react";
import { showToast } from "../../../utils/Toast";

const ConversationSidebar = ({ selectedTab, handleSelectTab }) => {
  const [searchInput, setSearchInput] = useState("");
  const [loadingData, setLoadingData] = useState(true);
  const [conversation, setConversation] = useState([]);

  const { user } = useStateContext();

  useEffect(() => {
    setLoadingData(true);
    if (user && user.user && user.user.id) {
      let userId = user?.user?.id;
      let url =
        import.meta.env.VITE_AXIOS_URL + "conversations?receiverId=" + userId;

      axios
        .get(url)
        .then((value) => {
          if (value.status === 200) {
            setConversation(value.data);
            setLoadingData(false);
          }
        })
        .catch((err) => {
          showToast(err.message, "error");
        });
    }
  }, [user]);

  let searchData = searchInput.toLocaleLowerCase();
  const filteredData = conversation.filter((item) =>
    item.senderName.toLocaleLowerCase().includes(searchData)
  );

  return (
    <div className={`h-[80vh] border p-4 w-full bg-background `}>
      <div className="searchbar">
        <h1 className="my-2 text-lg font-semibold">Conversation</h1>
        <div className="bg-white flex items-center p-2 border rounded-md shadow-sm gap-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 stroke-textSecondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            className="outline-none bg-transparent"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="chatConversation py-2 flex flex-col gap-2">
        <div className="conversations">
          {loadingData ? (
            <>
              <div
                className={` conversation gap-2 flex items-center select-none p-2  transition-all rounded-md cursor-pointer`}
              >
                <div
                  className="h-10  w-10 rounded-full border bg-gray-200 animate-pulse"
                  alt="user"
                />
                <div className="details">
                  <h1 className=" h-4 bg-gray-200 animate-pulse w-24"></h1>
                  <p className="  h-4 bg-gray-200 animate-pulse w-48 delay-500 mt-1"></p>
                </div>
              </div>
              <div
                className={` conversation gap-2 flex items-center select-none p-2  transition-all rounded-md cursor-pointer`}
              >
                <div
                  className="h-10  w-10 rounded-full border bg-gray-200 animate-pulse"
                  alt="user"
                />
                <div className="details">
                  <h1 className=" h-4 bg-gray-200 animate-pulse w-24"></h1>
                  <p className="  h-4 bg-gray-200 animate-pulse w-48 delay-500 mt-1"></p>
                </div>
              </div>
              <div
                className={` conversation gap-2 flex items-center select-none p-2  transition-all rounded-md cursor-pointer`}
              >
                <div
                  className="h-10  w-10 rounded-full border bg-gray-200 animate-pulse"
                  alt="user"
                />
                <div className="details">
                  <h1 className=" h-4 bg-gray-200 animate-pulse w-24"></h1>
                  <p className="  h-4 bg-gray-200 animate-pulse w-48 delay-500 mt-1"></p>
                </div>
              </div>
              <div
                className={` conversation gap-2 flex items-center select-none p-2  transition-all rounded-md cursor-pointer`}
              >
                <div
                  className="h-10  w-10 rounded-full border bg-gray-200 animate-pulse"
                  alt="user"
                />
                <div className="details">
                  <h1 className=" h-4 bg-gray-200 animate-pulse w-24"></h1>
                  <p className="  h-4 bg-gray-200 animate-pulse w-48 delay-500 mt-1"></p>
                </div>
              </div>
              <div
                className={` conversation gap-2 flex items-center select-none p-2  transition-all rounded-md cursor-pointer`}
              >
                <div
                  className="h-10  w-10 rounded-full border bg-gray-200 animate-pulse"
                  alt="user"
                />
                <div className="details">
                  <h1 className=" h-4 bg-gray-200 animate-pulse w-24"></h1>
                  <p className="  h-4 bg-gray-200 animate-pulse w-48 delay-500 mt-1"></p>
                </div>
              </div>
              <div
                className={` conversation gap-2 flex items-center select-none p-2  transition-all rounded-md cursor-pointer`}
              >
                <div
                  className="h-10  w-10 rounded-full border bg-gray-200 animate-pulse"
                  alt="user"
                />
                <div className="details">
                  <h1 className=" h-4 bg-gray-200 animate-pulse w-24"></h1>
                  <p className="  h-4 bg-gray-200 animate-pulse w-48 delay-500 mt-1"></p>
                </div>
              </div>
              <div
                className={` conversation gap-2 flex items-center select-none p-2  transition-all rounded-md cursor-pointer`}
              >
                <div
                  className="h-10  w-10 rounded-full border bg-gray-200 animate-pulse"
                  alt="user"
                />
                <div className="details">
                  <h1 className=" h-4 bg-gray-200 animate-pulse w-24"></h1>
                  <p className="  h-4 bg-gray-200 animate-pulse w-48 delay-500 mt-1"></p>
                </div>
              </div>
              <div
                className={` conversation gap-2 flex items-center select-none p-2  transition-all rounded-md cursor-pointer`}
              >
                <div
                  className="h-10  w-10 rounded-full border bg-gray-200 animate-pulse"
                  alt="user"
                />
                <div className="details">
                  <h1 className=" h-4 bg-gray-200 animate-pulse w-24"></h1>
                  <p className="  h-4 bg-gray-200 animate-pulse w-48 delay-500 mt-1"></p>
                </div>
              </div>
              <div
                className={` conversation gap-2 flex items-center select-none p-2  transition-all rounded-md cursor-pointer`}
              >
                <div
                  className="h-10  w-10 rounded-full border bg-gray-200 animate-pulse"
                  alt="user"
                />
                <div className="details">
                  <h1 className=" h-4 bg-gray-200 animate-pulse w-24"></h1>
                  <p className="  h-4 bg-gray-200 animate-pulse w-48 delay-500 mt-1"></p>
                </div>
              </div>
            </>
          ) : (
            filteredData.map((item) => {
              return (
                <div
                  key={item.conversationId}
                  onClick={() => handleSelectTab(item.senderId)}
                  className="conversation"
                >
                  <div
                    className={`${
                      selectedTab === item.senderId &&
                      "bg-gray-100 border shadow-sm"
                    } conversation gap-2 flex items-center select-none p-2 hover:bg-gray-200 transition-all rounded-md cursor-pointer`}
                  >
                    <img
                      className="h-10  w-10 rounded-full border bg-gray-200"
                      src="./doctor.webp"
                      alt="user"
                    />
                    <div className="details">
                      <h1 className="font-semibold text-base">
                        {item.senderName}
                      </h1>
                      <p className="text-textSecondary text-sm">hello sir</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ConversationSidebar);
