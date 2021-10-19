import React from 'react';
import { uniqueId } from "lodash";
import classes from './SearchList.module.css'

export const SearchList = ({ onSelectCity, citiesArray }) => {
  return (
    <ul className={classes.ul}>
      {citiesArray.map((item) => <li onClick={() => onSelectCity(item)} className={classes.li} key={uniqueId()} ><b>{item.city}</b>, {item.state}</li>)}
    </ul>
  )
}
