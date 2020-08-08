import React from 'react'

import './Product.css'
import Star from "@material-ui/icons/StarRate"
import { useStateValue } from './StateProvider'


function Product ({id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add it to basket..
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        rating,
        image
      }
    })

  };

  return (
    <div className="product"> 
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        
        <div className="product__rating">
          {
            Array(rating).fill().map(() => <p><Star/></p>)
          }
        </div> 

      </div>

        <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product