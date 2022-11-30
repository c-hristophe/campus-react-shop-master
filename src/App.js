import React, { useState, useContext, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Menu, Icon, Button } from "semantic-ui-react";
import "./App.css";
import BookList from "./components/BookList";
import cartList from "./components/cartList";
import CartDetails from "./components/CartDetails";
import SingleProduct from "./components/SingleProduct"
import SingleCart from "./components/singleCart"
import Contact from "./components/Contact";
import Customer from './components/customer'
import Form from "./components/Form"
import Signup from "./components/Signup"
import Recherche from "./components/Recherche"
import findCustomer from './components/findCustomer'
import Box  from "./components/Box";
import boxYear  from "./components/boxYear";
import Login from "./components/Login"
import Header from "./components/header"
import MenuWeb from "./components/menuWeb"
import MenuMaster from "./components/menuMaster"
import Delete from "./components/Delete"
import FormModify from "./components/FormModify"
import vueContactList from './components/vueContactList'
import Index from './components/index'
import address from './components/address'

import "./index.css";




export const CartContext = createContext();
const CART_KEY = "react-shop";

function logOut (){
  localStorage.removeItem('isOn')
  window.location.reload()
}

function App() {
  const [cart, setCart] = useState({});
  const [nbArticles, setNbArticles] = useState(0);
  

 
  useEffect(() => {
    const cartFromStorage = localStorage.getItem(CART_KEY);
    if (cartFromStorage !== null) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  useEffect(() => {
 
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    
    document.title = `caddie(${nbArticles.toFixed(2)}€)`;
  }, [cart, nbArticles]);

  function addToCart(item) {
    console.log("item", item);
    if (!cart[item._id]) {
      cart[item._id] = item;
      cart[item._id].quantity = 1;
     
    } else {
      cart[item._id].quantity += 1;
    }
    setCart({ ...cart });
    console.log("cart", cart);
  }

  function removeFromCart(item) {
    if (cart[item._id].quantity !== 1) {
      cart[item._id].quantity = cart[item._id].quantity - 1;
    } else {
      delete cart[item._id];
    }
    setCart({ ...cart });
    console.log("cart", cart);
  }

  function emptyCart() {
    const response = window.confirm(
      "Etes-vous vous sûr de vouloir vider le caddie ? "
    );
    if (response) {
      setCart({});
    }
  }

  function countCartArticles() {
    let total = 0;
    Object.keys(cart).map(key => (total += cart[key].quantity*cart[key].price));
    setNbArticles(total);
    return total;
  }

  
  
  const contextValue = {
    cart,
    addToCart,
    countCartArticles,
    removeFromCart,
    emptyCart
  };



  

  
var isOn = localStorage.getItem('isOn')


  return (
    <>
      <Router>
        <CartContext.Provider value={contextValue}>
          <Container>
            
            <Header/>
            <MenuWeb/>
            {isOn==="1" &&<MenuMaster/>}
            {isOn===null &&<Index/>}
          </Container>
          <Switch>
            <Route path="/cart" component={CartDetails} />
            <Route path="/note" component={cartList} />
            <Route path="/form" component={Form} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Customer" component={Customer} />  
            <Route path="/vueContactList" component={vueContactList} />
            <Route path="/Recherche" component={Recherche} />
            <Route path="/findCustomer" component={findCustomer} />
            <Route path="Delete" component={Delete} />
            <Route path="/FormModify" component={FormModify} />
            <Route path="/SingleProduct/:productId" component={SingleProduct} />
            <Route path="/SingleCart/:productId" component={SingleCart} />
            <Route path="/Box" component={Box} />
            <Route path="/BoxYear" component={boxYear} />
            <Route path="/address" component={address} />
            
            <Route path="/" component={BookList} />
             

          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
