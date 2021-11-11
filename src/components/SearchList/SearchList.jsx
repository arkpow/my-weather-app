import React from 'react';
import classes from './SearchList.module.css'

export const SearchList = ({ onSelectCity, citiesArray }) => {
  return (
    <ul className={classes.ul}>
      {citiesArray.map((item, index) => <li onClick={() => onSelectCity(item)} className={classes.li} key={index} ><b>{item.city}</b>, {item.state}</li>)}
    </ul>
  )
}
