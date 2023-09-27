import React, { useState } from "react";

const Sidebar = () => {
  const [selectedTile, setSelectedTile] = useState([]);
  const history = [
    {
      id: 1,
      heading: "Comments",
      description: "Get notified when someones posts a comment on a posting.",
    },
    {
      id: 2,
      heading: "Comments 2",
      description: "Get notified when someones posts a comment on a posting.",
    },
    {
      id: 3,
      heading: "Comments 3",
      description: "Get notified when someones posts a comment on a posting.",
    },
    {
      id: 4,
      heading: "Comments 4",
      description: "Get notified when someones posts a comment on a posting.",
    },
  ];

  const toggleSelection = (id) => {
    if (selectedTile.includes(id)) {
      setSelectedTile(selectedTile.filter((tileId) => tileId !== id));
    } else {
      setSelectedTile([...selectedTile, id]);
    }
  };

  return (
    <div className="max-w-[254px] relative w-full p-2 border flex flex-col gap-2 h-[calc(100vh-221px)]">
      <div className="header flex gap-2">
        <button className="border flex px-4 p-2 w-full rounded-md items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <p>Add Chat</p>
        </button>
        <button className="border rounded-md p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="items flex flex-col gap-2">
        {history.map((item, index) => {
          return (
            <label
              key={item.id}
              className={`item flex gap-2 p-2 rounded-md cursor-pointer ${
                selectedTile.includes(item.id) && "border"
              }`}
              htmlFor={item.id}
            >
              <div className="flex h-6 items-center">
                <input
                  id={item.id}
                  name="comments"
                  type="checkbox"
                  onChange={() => toggleSelection(item.id)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label className="font-semibold text-sm text-textMain">
                  {item.heading}
                </label>
                <p className="text-textSecondary font-normal text-xs">
                  {item.description}
                </p>
              </div>
            </label>
          );
        })}
      </div>
      <div className="bg-white p-2 absolute bottom-2 left-0 w-full">
        <div className="flex border p-2 rounded-md cursor-pointer items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          <p>Clear history</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
