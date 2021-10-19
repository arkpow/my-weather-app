import React from 'react'
import classes from './SearchInput.module.css'

export const SearchInput = ({ inputState, onChangeInput }) => {

    return (
      <input
        autoFocus
        className={classes.input}
        value={inputState}
        placeholder="Select city..."
        onChange={(e) => onChangeInput(e.target.value)}
      />
    )
}