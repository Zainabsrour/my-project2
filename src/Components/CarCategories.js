import React from 'react';
import carBrands from '../Data/CarBrandsData';
import '../styles/brand-card.css';
function CarCategories() {
  return (
    <section className="py-5 bg-light text-center">
      <h2 className="mb-4 section-title">Browse By Brands</h2>
      <div className="container">
        <div className="row justify-content-center">
          {carBrands.map((brand) => (
            <div key={brand.name} className="col-6 col-sm-4 col-md-2 mb-4">
              <div className="brand-card">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brand-logo"
                />
                <p className="brand-name">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarCategories;
