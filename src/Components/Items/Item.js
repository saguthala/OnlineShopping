import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='iteam'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className='iteam-prices'>
        <div className='iteam-price-new'>
          ${props.new_price}
        </div>
        <div className='iteam-price-old'>
          ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item