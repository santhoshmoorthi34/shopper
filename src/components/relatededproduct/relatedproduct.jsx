import React from 'react'
import './relatedproduct.css'
import data_product from '../Assets/data'
import Item from '../item/item'

const Relatedproduct = () => {
  return (
    <div className='relatedeproduct'>
    <h1>Relatede product</h1>
    <hr />
    <div className="relatedeproduct-item">
{data_product.map((item,i)=>{

   return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})

}
    </div>
  
</div>
  )
}

export default Relatedproduct
