// Bmw.js
import React from "react";
import { bmwCars } from "../Data/BmwData"; // import the BMW cars data array
import CarCard from "../Components/CarCard"; // import the card component
import Slider from "../Components/SliderCars"; // import the slider/carousel component
import bmw_3 from "../Assets/bmw_images/bmw_3.jpg";
import bmw_4 from "../Assets/bmw_images/bmw_4.jpeg";
import bmw_8 from "../Assets/bmw_images/bmw_8.jpeg";
import { useNavigate } from "react-router-dom"; // hook to navigate programmatically
import "../styles/Bmw.css";

export default function Bmw() {
  const navigate = useNavigate(); // initialize navigate function

  // Images and captions for the carousel
  const images = [bmw_3, bmw_4, bmw_8];
  const captions = [
    "Luxury and Power",
    "Designed for Excellence",
    "Drive the Future",
  ];

  // Function called when user clicks "View Details" on a car
  // Receives the car id and navigates to dynamic URL
  const handleViewDetails = (id) => {
    navigate(`/bmw/${id}`);
  };

  return (
    <div className="cars-container">
      {/* Carousel component showing images and captions */}
      <Slider images={images} captions={captions} />  
      <br />
      <h1>
        <center>Our BMW Cars</center>
      </h1>

      {/* Wrapper for car cards */}
      <div className="cars-wrapper">
        <div className="d-flex flex-wrap gap-3 mt-4 row">
          {/* Map through all BMW cars from the data array */}
          {bmwCars.map((car) => (
            <CarCard
              key={car.id} // unique key for React
              id={car.id}  // pass the car id to the card
              img={car.img} // car image
              name={car.name} // car name
              price={car.price} // car price
              onViewDetails={handleViewDetails} // pass callback function
            />
          ))}
        </div>
      </div>
    </div>
  );
}
