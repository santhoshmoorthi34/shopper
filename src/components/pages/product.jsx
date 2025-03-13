import React, { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { useParams } from "react-router-dom";
import Breadcum from "../breadcum/breadcum";
import Productdisplay from "../productdisplay/productdisplay";
import Relatedproduct from "../relatededproduct/relatedproduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));
  console.log(product)

  return (
    <div>
      <Breadcum product={product} />
      <Productdisplay product={product}></Productdisplay>
      <Relatedproduct/>
    </div>
  );
};

export default Product;
