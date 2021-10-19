import React, { useState, useCallback } from 'react';
import './App.css';
import { Search } from './Pages/Search'
import { Weather } from './Pages/Weather/Weather'

function App() {

  const [selectedCity, setSelectedCity] = useState({})

  const onSelectCity = useCallback(
    (data) => {
        setSelectedCity(data); 
    },
    [setSelectedCity],
  )

  const goBack = useCallback(
    () => {
      setSelectedCity({});
    },
    [],
  )

  return (
    <div className="App">
        {Object.keys(selectedCity).length === 0
        ? <Search onSelectCity={onSelectCity} />
        : <Weather selectedCity={selectedCity} goBack={goBack} />}
    </div>
  );
}

export default App;
