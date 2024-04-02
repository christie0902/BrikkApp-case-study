import React, { useState } from 'react';
import PropertyList from './components/PropertyList';
import PropertyComparison from './components/PropertyComparison';


function App() {
  const [selectedProperties, setSelectedProperties] = useState([]);

  const handleSelectProperty = (property) => {
    if (selectedProperties.length < 2) {
        setSelectedProperties([...selectedProperties, property]);
    } else {
        setSelectedProperties([selectedProperties[1], property]);
    }
};

  return (
    <div>
            <PropertyList onSelectProperty={handleSelectProperty} />
            {selectedProperties.length === 2 && (
                <PropertyComparison propertyA={selectedProperties[0]} propertyB={selectedProperties[1]} />
            )}
    </div>
  );
};

export default App
