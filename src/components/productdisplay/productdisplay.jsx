
import React, { useContext } from 'react';
import "./productdisplay.css"
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../context/shopcontext';

const Productdisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    
    return (
        <div className='productdisplay'>
            
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="Product" />
                    <img src={product.image} alt="Product" />
                    <img src={product.image} alt="Product" />
                    <img src={product.image} alt="Product" />
                </div>
                <div className="productdisplay-image">
                    <img className='productdisplay-main-img' src={product.image} alt="Product" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_dull_icon} alt="Star" />
                    <p>(123)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore quasi ad eligendi nisi, maiores sunt adipisci ducimus eius odio?
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Productdisplay;

