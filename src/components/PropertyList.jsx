import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/ApiService';
import '../css/PropertyList.scss';

const PropertyList = ({ onSelectProperty }) => {
    const [properties, setProperties] = useState([]);
    
  
    useEffect(() => {
      const getProperties = async () => {
        const data = await fetchProperties();
        setProperties(data);
      };
  
      getProperties();
    }, []);

    const handlePropertyClick = (property) => {
        onSelectProperty(property);
    }

    return (
        <div className="property-list">
            {properties.map(property => (
                <div 
                    key={property.id} 
                    className="property-card"
                    onClick={() => handlePropertyClick(property)}
                >
                    <img src={property.images[0]} alt={property.name_extracted} className="property-image" />
                    <div className="property-info">
                        <div className="property-details">
                            <h3 className="property-title">{property.name_extracted}</h3>
                            <p className="property-locality">{property.locality}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
  };
  
  export default PropertyList;