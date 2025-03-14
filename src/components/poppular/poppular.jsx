import React, { useEffect, useState } from 'react'
import "./poppular.css"
// import data_product from '../Assets/data'
import Item from '../item/item'
// import { data } from 'react-router-dom';

const Poppular = () => {

  const [poppularProduct,setPoppularProduct]=useState([]);

  useEffect(()=>{
  fetch('https://shopperbackend-70xa.onrender.com/poppularinwomen')
  .then((response)=>response.json())
  .then((data)=>setPoppularProduct(data));
    
  })

  return (
    <div className='poppular'>
        <h1>POPPULAR IN WOMEN</h1>

        <hr className='line' />
<div className="poppular-item">
    {poppularProduct.map((item,i)=>{
        return  <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
    </div>      
    </div>
  )
}

export default Poppular
