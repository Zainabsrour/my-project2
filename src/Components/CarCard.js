
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // heart icon for favorites

export default function CarCard({ id, img, name, price, onViewDetails }) {
  const [liked, setLiked] = useState(false); // state for heart icon toggle

  return (
    <div className="card car-card" style={{ width: "18rem" }}>
      {/* Car image */}
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        {/* Car name */}
        <h5 className="card-title" style={{ fontWeight: "1000" }}>
          {name}
        </h5>

        {/* Car price */}
        <p className="card-text">${price}</p>

        {/* Heart icon (UI only, does not save anywhere) */}
        <FaHeart
          onClick={() => setLiked(!liked)}
          style={{
            cursor: "pointer",
            color: liked ? "red" : "gray", // red if liked
            fontSize: "22px",
          }}
        />

        {/* Button to view details */}
        {/* Important: pass the id to the callback function */}
        <button
          className="btn w-100 mt-3"
          style={{ backgroundColor: "rgba(77, 159, 207, 1)", color: "white" }}
          onClick={() => onViewDetails(id)} // navigate to car details page
        >
          View Details
        </button>
      </div>
    </div>
  );
}
