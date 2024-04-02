import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyComparison = ({ propertyA, propertyB }) => {
    return (
      <div>
        <PropertyCard property={propertyA} />
        <PropertyCard property={propertyB} />
        {/* Add comparison logic and display */}
      </div>
    );
  };

export default PropertyComparison