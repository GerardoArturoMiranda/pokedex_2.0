import React from 'react'
import { useCallback } from 'react'
export default function SearchBar({ pokemonName, onNameChange }) {

  const handleInputChange = useCallback(event => {
    onNameChange(event.target.value)
  }, [onNameChange])

  return (
    <div className='row w-100'>
      <input onChange={handleInputChange} value={pokemonName}></input>
    </div>
  )
}
