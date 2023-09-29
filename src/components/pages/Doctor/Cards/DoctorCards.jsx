import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Checkout from "../Appointment/Checkout/Checkout";
const DoctorCards = () => {
  const DoctorList = [
    {
      name: "John Doe",
      specialist: "Cardiologist",
      rating: 4.5,
      address: "123 Main Street",
      id: 1,
      img: "https://example.com/doctor1.jpg",
    },
    {
      name: "Jane Smith",
      specialist: "Dermatologist",
      rating: 4.2,
      address: "456 Elm Street",
      id: 2,
      img: "https://example.com/doctor2.jpg",
    },
    {
      name: "David Johnson",
      specialist: "Orthopedic Surgeon",
      rating: 4.7,
      address: "789 Oak Street",
      id: 3,
      img: "https://example.com/doctor3.jpg",
    },
    {
      name: "Sarah Williams",
      specialist: "Pediatrician",
      rating: 4.9,
      address: "321 Pine Street",
      id: 4,
      img: "https://example.com/doctor4.jpg",
    },
    {
      name: "Michael Brown",
      specialist: "Ophthalmologist",
      rating: 4.3,
      address: "654 Cedar Street",
      id: 5,
      img: "https://example.com/doctor5.jpg",
    },
    {
      name: "Jennifer Davis",
      specialist: "Gynecologist",
      rating: 4.6,
      address: "987 Maple Street",
      id: 6,
      img: "https://example.com/doctor6.jpg",
    },
    {
      name: "Robert Miller",
      specialist: "Neurologist",
      rating: 4.8,
      address: "159 Birch Street",
      id: 7,
      img: "https://example.com/doctor7.jpg",
    },
    {
      name: "Karen Wilson",
      specialist: "Psychiatrist",
      rating: 4.4,
      address: "753 Walnut Street",
      id: 8,
      img: "https://example.com/doctor8.jpg",
    },
    {
      name: "William Anderson",
      specialist: "Urologist",
      rating: 4.1,
      address: "852 Oakwood Street",
      id: 9,
      img: "https://example.com/doctor9.jpg",
    },
    {
      name: "Amanda Taylor",
      specialist: "General Practitioner",
      rating: 4.7,
      address: "369 Chestnut Street",
      id: 10,
      img: "https://example.com/doctor10.jpg",
    },
  ];

  // Function to generate a random color in hexadecimal format
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add a single random color field to each object in the DoctorList
  const DoctorListWithRandomColors = DoctorList.map((doctor) => ({
    ...doctor,
    randomColor: getRandomColor(),
  }));

  return (
    <>
      {DoctorListWithRandomColors.map((item) => {
        return (
          <div
            key={item.id}
            className="doctor-item border capitalize shadow-md rounded-md p-4 flex flex-col gap-4"
          >
            <div
              style={{ outlineColor: item.randomColor }}
              className={`image outline outline-2 outline-offset-8 rounded-full overflow-hidden w-48 m-auto`}
            >
              <img loading="lazy" src="../doctor.png" alt="doctor" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <div className="flex justify-between">
                <p className="text-white p-2 text-sm bg-primary rounded-md">
                  {item.specialist}
                </p>
                <div className="rating flex items-center gap-1">
                  <img loading="lazy" src="../svg/star.svg" alt="star" />
                  <p className="rating">{item.rating}(20)</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="address">
                  <p className="text-textSecondary text-sm">{item.address}</p>
                </div>
                <Link
                  to={`/doctor/appointment/checkout/${item.id}`}
                  className="p-2 bg-primary rounded-full"
                >
                  <img loading="lazy" src="../svg/arrow.svg" alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(DoctorCards);
