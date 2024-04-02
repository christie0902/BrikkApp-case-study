import React from "react";
import '../css/PropertyCard.scss';

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
    }).format(price);
  };

  return (
    <div className="card-container">
      <div className="card">
        <img
          src={property.images[0]}
          alt={property.name}
          className="card__image"
        />
        <div className="card__content">
          <h3 className="card__title">{property.name_extracted}</h3>
          <p className="card__locality">{property.locality}</p>
          <p className="card__price">{formatPrice(property.prize_czk)}</p>
          <p className="card__size">
            Building: {property.building_area} m² / Land: {property.land_area} m²
          </p>
          <div className="card__labels">
            {property.labels &&
              Object.entries(property.labels).map(([key, value]) => (
                <span key={key} className="card__label">
                  {value}
                </span>
              ))}
          </div>
        </div>
        <div className="card__company">
          <img
            src={property.company_logo}
            alt={property.company_name}
            className="company-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;