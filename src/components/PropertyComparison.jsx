import React from "react";
import PropertyCard from "./PropertyCard";
import "../css/Comparison.scss";

const PropertyComparison = ({ propertyA, propertyB }) => {
  const canCompare = propertyA && propertyB;

  return (
    <div className="comparison-container">
      {canCompare ? (
        <>
          <PropertyCard
            property={propertyA}
            comparisonValues={{
              price: propertyB.prize_czk,
              floorArea: propertyB.building_area,
              landArea: propertyB.land_area,
            }}
          />
          <PropertyCard
            property={propertyB}
            comparisonValues={{
              price: propertyA.prize_czk,
              floorArea: propertyA.building_area,
              landArea: propertyA.land_area,
            }}
          />
        </>
      ) : (
        <p>Please select two properties to compare.</p>
      )}
    </div>
  );
};

export default PropertyComparison;
