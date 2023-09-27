import React, { useEffect, useState } from "react";

function Calendar() {
  // Function to get the days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the name of the day (0 = Sunday, 1 = Monday, etc.)
  const getDayName = (year, month, day) => {
    return new Date(year, month, day).toLocaleDateString("en-US", {
      weekday: "long",
    });
  };

  // State to keep track of the current month and year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState();

  // Handle navigation to the next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Handle navigation to the previous month
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Calculate the number of days in the current month
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  // Calculate the day of the week for the first day of the month
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  // Create an array of day numbers for the current month
  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    // Check if the current year and month match the calendar's displayed year and month
    if (currentYear === currentYear && currentMonth === currentMonth) {
      setSelectedDate(`${currentDay}/${currentMonth + 1}/${currentYear}`);
    } else {
      setSelectedDate(null); // Reset selectedDate if it's not in the displayed month
    }
  }, []);

  // Create an array of day labels (Sunday to Saturday)
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="calendar">
      <div className="flex py-2 items-center justify-between">
        <button className="p-2" onClick={goToPrevMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h1 className="text-base text-textSecondary p-2 text-center">
          {new Date(currentYear, currentMonth).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h1>
        <button className="p-2" onClick={goToNextMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 p-2">
        {dayLabels.map((label) => (
          <div
            key={label}
            className="w-1/7 p-2 py-4 text-xs font-medium uppercase border-t-2  text-center"
          >
            {label}
          </div>
        ))}
        {Array.from({ length: firstDayOfWeek }, (_, index) => (
          <div key={index} className="w-1/7 p-2 "></div>
        ))}
        {daysArray.map((day) => (
          <div
            key={day}
            className={
              selectedDate === `${day}/${currentMonth + 1}/${currentYear}`
                ? `w-1/7 cursor-pointer aspect-square p-2 text-sm  text-center bg-primary rounded-full text-white`
                : `w-1/7 cursor-pointer aspect-square p-2 text-sm  text-center `
            }
            onClick={() =>
              setSelectedDate(`${day}/${currentMonth + 1}/${currentYear}`)
            }
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
