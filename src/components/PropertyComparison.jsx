import React from 'react';
import PropertyCard from './PropertyCard';
import '../css/Comparison.scss';

const PropertyComparison = ({ propertyA, propertyB }) => {
    const canCompare = propertyA && propertyB;

    return (
        <div className="comparison-container">
          {canCompare ? (
            <>
              <PropertyCard property={propertyA} />
              <PropertyCard property={propertyB} />
              {/* Add comparison logic and display */}
            </>
          ) : (
            <p>Please select two properties to compare.</p>
          )}
        </div>
      );
  };

export default PropertyComparison