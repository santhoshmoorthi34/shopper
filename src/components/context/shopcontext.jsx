



import React, { createContext,useState } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
    for (let index = 0; index < 300 +1; index++) {
      cart[index] = 0; 
    }
  return cart;
};

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());


  // //////////////important
  // console.log(cartItems)
  // const [all_product, setAll_product] = useState([]);


  // useEffect(() => {
  //   fetch('http://localhost:510/allproducts')
  //     .then((response) => response.json())
  //     .then((data) => setAll_product(data))
  //     .catch((error) => console.error("Error fetching products:", error));

    //  if(localStorage.getItem('auth-token')){
    //   fetch('http://localhost:510/getcart'),{
    //     method:'POST',
    //     Headers:{
    //       Accept:'appilication/form-data',
    //       'auth-token':`${localStorage.getItem('auth-token')}`,
    //       'Content-Type':'application/json'
    //     },
    //     body:"",

    //  }).then((response)=>response)
    //  .then((data)=>setCartItems(data))

    // if (localStorage.getItem('auth-token')) {
    //   fetch('http://localhost:510/getcart', {
    //     method: 'GET',  // Use GET instead of POST
    //     headers: {
    //       Accept: 'application/json',  // Correct MIME type
    //       'auth-token': `${localStorage.getItem('auth-token')}`,
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(data => setCartItems(data))  // Update cart state
    //   .catch(error => console.error('Error fetching cart:', error));  // Handle errors
    // }
    
    
            
  // }, []);

  // Add to Cart
  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId]) + 1 }));
  //   if(localStorage.getItem('auth-token')){
  //     fetch('http://localhost:510/addtocart',{
  //       method:'POST',
  //       headers:{
  //         Accept:'application/form-data',
  //         'auth-token':`${localStorage.getItem('auth-token')}`,
  //         'Content-Type':'application/json',

  //       },
  //       body:JSON.stringify({"itemId":itemId})
  //     })
  //     .then((response)=>response.json())
  //     .then((data)=>console.log(data));
  //   }

  // };






   const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId]) + 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:510/addtocart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',

        },
        body:JSON.stringify({"itemId":itemId})
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
    }

  };
  // Remove from Cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:510/removefromcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',

        },
        body:JSON.stringify({"itemId":itemId})})
      .then((response)=>response.json())
      .then((data)=>console.log(data,"removed"));
      
    }
  };


const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) { 
        if (cartItems[item] > 0) {  
            let itemInfo = all_product.find((product) => product.id === Number(item));  
            if (itemInfo) {  // ✅ Ensure itemInfo is not undefined
                totalAmount += itemInfo.new_price * cartItems[item];  
            }
        }
    }
    return totalAmount;  // ✅ Moved outside the loop
};

const getTotalCartItems =()=>{
    let totalItem=0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItem+=cartItems[item];
        }
    }
    return totalItem
}

  const contextValue = {getTotalCartItems,getTotalCartAmount , all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
