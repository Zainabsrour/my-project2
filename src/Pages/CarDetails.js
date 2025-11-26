// CarDetails.js
import React, { useState } from "react"; // React + useState for Buy Now form
import { useParams } from "react-router-dom"; // to get dynamic car id from URL
import { bmwCars } from "../Data/BmwData"; // our cars data
import "../styles/Cardetails.css"; // styling for the details page

export default function CarDetails() {
  const [showForm, setShowForm] = useState(false); // state for showing/hiding order form
  const { id } = useParams(); // get the car id from the URL (e.g., /bmw/1)

  // Find the car in our data array using the id from URL
  const car = bmwCars.find((c) => c.id === parseInt(id));

  // If the car id is not found, show this message
  if (!car) return <p>Car not found!</p>;

  return (
    <div className="car-details-container" style={{ padding: "20px" }}>
      {/* Car information */}
      <h1>{car.name}</h1>
      <img
        src={car.img}
        alt={car.name}
        style={{ width: "500px", objectFit: "cover" }}
      />
      <p>Price: ${car.price}</p>
      <p>Engine: {car.engine}</p>
      <p>Fuel Type: {car.fuel}</p>
      <p>Year: {car.year}</p>
      <p>
        Available Colors:{" "}
        {car.colors ? car.colors.join(", ") : "N/A"} {/* join array to string */}
      </p>

      {/* Buy Now button */}
      <button
        className="buy-btn"
        onClick={() => setShowForm(true)} // show the order form
      >
        Buy Now
      </button>

      {/* Order Form overlay */}
      {showForm && (
        <div className="order-form-overlay">
          <div className="order-form">
            <h2>Order {car.name}</h2>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Your Name" required />

              <label>Email:</label>
              <input type="email" placeholder="Your Email" required />

              <label>Phone:</label>
              <input type="tel" placeholder="Your Phone" required />

              <label>Address:</label>
              <textarea placeholder="Your Address" required></textarea>

              <button type="submit">Submit Order</button>
              <button
                type="button"
                onClick={() => setShowForm(false)} // hide the form
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
