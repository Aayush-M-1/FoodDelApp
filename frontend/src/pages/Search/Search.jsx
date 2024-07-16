import React, { useContext } from 'react'
import './Search.css'
import { StoreContext } from '../../context/StoreContext'

const Search = () => {

  const {search_list} = useContext(StoreContext);
  console.log(search_list);

  return (
    <div>Search</div>
  )
}

export default Search