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
          <div className="card__table">
            <div className="card__row">
              <span className="card__cell card__cell--title">Price</span>
              <span className="card__cell card__cell--content">{formatPrice(property.prize_czk)}</span>
            </div>
            <div className="card__row">
              <span className="card__cell card__cell--title">Locality</span>
              <span className="card__cell card__cell--content">{property.locality}</span>
            </div>
            <div className="card__row">
              <span className="card__cell card__cell--title">Floor area</span>
              <span className="card__cell card__cell--content">{property.building_area} m²</span>
            </div>
            <div className="card__row">
              <span className="card__cell card__cell--title">Land area</span>
              <span className="card__cell card__cell--content">{property.land_area} m²</span>
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
    </div>
  );
};

export default PropertyCard;