import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Menu, Icon, } from "semantic-ui-react";
import "./App.css";
import BookList from "./components/BookList";
import cartList from "./components/cartList";
import CartSummary from "./components/CartSummary";
import FormSummary from './components/FormSummary';
import SignUpSummary from './components/SignUpSummary'
import LoginSummary from './components/LoginSummary'
import CartDetails from "./components/CartDetails";
import Cart from "./components/cart";
import SingleProduct from "./components/SingleProduct"
import Contact from "./components/Contact";
import Form from "./components/Form"
import Signup from "./components/Signup"
import RechercheSummary from "./components/RechercheSummary"
import Recherche from "./components/Recherche"
import Login from "./components/Login"
import Header from "./components/header"
import Delete from "./components/Delete"
import FormModify from "./components/FormModify"
import "./index.css";



export const CartContext = createContext();
const CART_KEY = "react-shop";

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
    if (!cart[item.id]) {
      cart[item.id] = item;
      cart[item.id].quantity = 1;
     
    } else {
      cart[item.id].quantity += 1;
    }
    setCart({ ...cart });
    console.log("cart", cart);
  }

  function removeFromCart(item) {
    if (cart[item.id].quantity !== 1) {
      cart[item.id].quantity = cart[item.id].quantity - 1;
    } else {
      delete cart[item.id];
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
const isLogged = localStorage.getItem('isLogged')
  return (
    <>
      <Router>
        <CartContext.Provider value={contextValue}>
          <Container>
            <Header/>
            <nav className="navMenu">
            <div className='navbar__link'>            
                <Link to="/note">
                  <Icon name="cart" size="small" /> <noteSummary />
                </Link>
                </div> 
              <div className='navbar__link'>
                <Link to="/">My Shop</Link>
              </div>  
              <div className='navbar__link'>            
                <Link to="/cart">
                  <Icon name="cart" size="small" /> <CartSummary />
                </Link>
                </div> 
                {isLogged==="true" && <div className='navbar__link'>
                <Link to="/form">
                   <FormSummary />
                </Link>
                </div>}
                
                <div className='navbar__link'>
                <Link to="/login">
                   <LoginSummary />
                </Link>
                </div>
                <div className='navbar__link'>
                <Link to="/Recherche">
                   <RechercheSummary />
                </Link>
                </div>

                
             
            </nav>
          </Container>
          <Switch>
            <Route path="/cart" component={CartDetails} />
            <Route path="/note" component={cartList} />
            <Route path="/form" component={Form} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <Route path="/Recherche" component={Recherche} />
            <Route path="Delete" component={Delete} />
            <Route path="/FormModify" component={FormModify} />
            <Route path="/SingleProduct/:productId" component={SingleProduct} />
            <Route path="/" component={BookList} />
             

          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
