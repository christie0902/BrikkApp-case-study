import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <>
      <div className="property-list-container">
        <div key={property.id} className="property-card">
          <img
            src={property.images[0]}
            alt={property.name}
            className="property-image"
          />
          <div className="property-details">
            <h3 className="property-name">{property.name_extracted}</h3>
            <p className="property-locality">{property.locality}</p>
            <p className="property-price">{formatPrice(property.prize_czk)}</p>
            <p className="property-size">
              Building: {property.building_area} m² / Land: {property.land_area}{" "}
              m²
            </p>
            <div className="property-labels">
              {property.labels &&
                Object.entries(property.labels).map(([key, value]) => (
                  <span key={key} className="property-label">
                    {value}
                  </span>
                ))}
            </div>
          </div>
          <div className="property-company">
            <img
              src={property.company_logo}
              alt={property.company_name}
              className="company-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
