import React, { useContext } from "react";
import "./css/shopcategory.css";

import dropdoen_icon from "../Assets/dropdown_icon.png";
import Item from "../item/item";
import { ShopContext } from "../context/shopcontext";

// Import Breadcum

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Find the first product that matches the category (for breadcrumb display)
  const product = all_product.find((item) => item.category === props.category) || null;

  return (
    <div className="shop_category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          <img src={dropdoen_icon} alt="" />
        </div>
      </div>

      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-lodemore">Explore more</div>
    </div>
  );
};

export default Shopcategory;
