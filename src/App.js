import React, { Component } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Navi from "./components/Navi/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
// import Product from "./components/Product/Product";
// import ProductsList from "./components/ProductsList/ProductsList";
// import SortingBox from "./components/SortingBox/SortingBox";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header-wrapper">
            <Link className="navi-logo" to="/">
              <span>Shop app</span>
            </Link>
            <div className="nav-home">
              <Navi />
              <ShoppingBag />
            </div>
          </div>
          <div className="main-layout">
            <Route exact path="/" component={Home} />
            {/* <Route path='/faq' component={FAQ} /> */}
            {/* <Route path='/regulations' component={Regulations} /> */}
            {/* <Route path='/contact' component={Contact} /> */}
            {/* <Route path='/product:id' component={Product} /> */}
          </div>
          <Footer className="Footer nav-home"/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
