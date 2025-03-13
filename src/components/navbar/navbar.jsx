

import React, { useContext,useState } from "react";
import "./navbar.css";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link,NavLink } from "react-router-dom";
import { ShopContext } from "../context/shopcontext";

const Navbar = () => {
    const [menu, setMenu]=useState("shop")
    const {getTotalCartItems}= useContext(ShopContext)
    // const menuRef=useRef();

   
  return (
    <div className="navbar">
        
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
{/* <img  onClick={dropdown_toggle}  src={nav_dropdown}   alt="" className="nav-dropdown" /> */}
      <ul className="nav-menu">
        <li  onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to={"/"}>Shop</Link > {menu==="shop"? <hr/>:<></>}  </li>
        <li onClick={()=>{setMenu("men")}}> <Link style={{textDecoration:'none'}} to={"/men"}>Men</Link>{menu==="mens"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("women")}}> <Link style={{textDecoration:'none'}} to={"/women"}>women</Link> {menu==="womens"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none'}} to={"/kids"}>kids</Link> {menu==="kids"? <hr/>:<></>} </li>
      </ul>
      <div className="nav-login-cart">
   {localStorage.getItem("auth-token") ? (
  <button
    onClick={() => {
      localStorage.removeItem("auth-token");
      window.location.replace("/"); // Fixed "repalce" typo
    }}
  >
    Logout
  </button>
) : (
  <NavLink to={"/login"}>
    <button>Login</button>
  </NavLink>
)}

         <NavLink to={"/cart"}><img src={cart_icon} alt="" /></NavLink>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

