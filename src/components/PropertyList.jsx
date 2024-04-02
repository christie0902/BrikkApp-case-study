import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/ApiService';
import '../css/PropertyList.scss';

const PropertyList = ({ onSelectProperty, selectedProperties }) => {
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
            {properties.map(property => {
                const isSelectedA = selectedProperties[0] && selectedProperties[0].id === property.id;
                const isSelectedB = selectedProperties[1] && selectedProperties[1].id === property.id;
                const selectionClass = isSelectedA ? 'selected-A' : isSelectedB ? 'selected-B' : '';
        
                return (
                <div 
                    key={property.id} 
                    className={`property-card ${selectionClass}`}
                    onClick={() => handlePropertyClick(property)}
                >
                    {isSelectedA && <span className="selection-badge">A</span>}
                    {isSelectedB && <span className="selection-badge">B</span>}
                    <img src={property.images[0]} alt={property.name_extracted} className="property-image" />
                    <div className="property-info">
                        <div className="property-details">
                            <h3 className="property-title">{property.name_extracted}</h3>
                            <p className="property-locality">{property.locality}</p>
                        </div>
                    </div>
                </div>
                 );
                })}
        </div>
    );
  };
  
  export default PropertyList;