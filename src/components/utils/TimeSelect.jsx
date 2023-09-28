import React, { useState } from "react";

const TimeSelect = () => {
  const Times = [
    { id: 1, startTime: 8, endTime: 9, TimeRefer: true },
    { id: 2, startTime: 10, endTime: 11, TimeRefer: true },
    { id: 3, startTime: 12, endTime: 1, TimeRefer: false },
    { id: 4, startTime: 4, endTime: 5, TimeRefer: false },
    { id: 5, startTime: 5, endTime: 6, TimeRefer: false },
    { id: 6, startTime: 7, endTime: 8, TimeRefer: false },
  ];

  const [time, setTime] = useState([]);
  const handleTimeChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const selected = Times.find((time) => time.id === selectedId);
    setTime(selected);
  };

  return (
    <div className="p-4">
      <h1 className="text-lg px-2 text-textMain">
        Select Time<span className="text-red-500">*</span>
      </h1>
      <div className="times  flex-wrap gap-4 flex py-2">
        {Times.map((item) => {
          const formattedStartTime = item.startTime.toString().padStart(2, "0");
          const formattedEndTime = item.endTime.toString().padStart(2, "0");
          return (
            <label
              key={item.id}
              htmlFor={item.id}
              className={`${
                `${time.startTime}-${time.endTime} ${
                  time.TimeRefer ? "AM" : "PM"
                }` ===
                  `${item.startTime}-${item.endTime} ${
                    item.TimeRefer ? "AM" : "PM"
                  }` && "bg-primary"
              } time uppercase cursor-pointer flex items-center justify-center gap-2 border rounded-md p-2 px-4 shadow-md`}
            >
              <input
                type="radio"
                name="timeSelect"
                id={item.id}
                value={item.id}
                onChange={handleTimeChange}
                className="accent-primary"
              />
              <p
                className={`select-none ${
                  `${time.startTime}-${time.endTime} ${
                    time.TimeRefer ? "AM" : "PM"
                  }` ===
                    `${item.startTime}-${item.endTime} ${
                      item.TimeRefer ? "AM" : "PM"
                    }` && "text-white"
                }`}
              >{`${formattedStartTime}-${formattedEndTime} ${
                item.TimeRefer === true ? "AM" : "PM"
              }`}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSelect;
