import React, { useContext } from 'react'
import './Search.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../../components/FoodItem/FoodItem'

const Search = () => {

  const { search_list } = useContext(StoreContext);
  console.log(search_list);

  return (
    <div className='food-display'>
      {
        search_list.length == 0
          ? <h2>No items found</h2>
          : <>
            <div className='food-display-list'>
              {search_list.map((item, index) => {
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              })}
            </div>
          </>
      }
    </div>
  )
}

export default Search