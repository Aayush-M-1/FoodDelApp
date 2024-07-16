import React, { useContext, useState } from 'react'
import './SearchBar.css'
import { assets } from '../../assets/assets'
import {useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const SearchBar = () => {

  const navigate = useNavigate();
  const [data, setData] = useState("");
  const {setSearchlist,url} = useContext(StoreContext);

  const onChangeHandler = (event) => {
    const value=event.target.value;
    setData(value);
  }

  const fetchSearchList = async (event) => {
    event.preventDefault();
    console.log(data);
    const response = await axios.post(url+"/api/food/search", {search:data});
    console.log(response.data.data);
    setSearchlist(response.data.data);
    navigate("./search");
  }

  // import useEffect before using this
  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  return (
    <div className='search-bar'>
        <form onSubmit={fetchSearchList} className="search-bar-container" id='search-bar-container'>
            <input type="text" placeholder="Search..." onChange={onChangeHandler} name='data' value={data}/>
            <button type='submit'><img src={assets.search_icon} alt="" /></button>
        </form>
    </div>
  )
}

export default SearchBar