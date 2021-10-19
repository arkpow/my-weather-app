import React, { useState, useCallback } from 'react'
import { SearchInput } from '../components/SearchInput/SearchInput'
import { SearchList } from '../components/SearchList/SearchList'

export const Search = ({ onSelectCity }) => {
    const [inputState, setInputState] = useState('');
    const [citiesArray, setCitiesArray] = useState([])

    const getCities = useCallback(
        async (value) => {
          const response = await fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
          if (response.status === 404) {
            alert('Сервер не отвечает');
          }
          const stats = await response.json();
          const regex = new RegExp(value, 'gi');
          const filteredResponse = stats.filter(kek => kek.city.match(regex) || kek.state.match(regex))
          await setCitiesArray(filteredResponse);
        },
        [],
      )

      const onChangeInput = useCallback(
        (value) => {
            setInputState(value)
            getCities(value)
        },
        [getCities],
    )

    return (
        <div>
            <SearchInput
                value={inputState}
                onChangeInput={onChangeInput}
            />

            <SearchList
                citiesArray={citiesArray}
                onSelectCity={onSelectCity}
            />
        </div>
    )
}
