import React, { Component } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Navi from "./components/Navi/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/sites/Home";
import Bag from "./components/sites/Bag";
// import NotFound from './components/sites/NotFound';
import ProductItem from "./components/Product/ProductItem/ProductItem";
import Contact from "./components/sites/Contact";
import Faq from "./components/sites/Faq";
import Regulations from "./components/sites/Regulations";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addToBag = this.addToBag.bind(this);
    this.state = {
      shoppingBag: []
    };
  }

  addToBag(id) {
    this.setState(prevState => ({ shoppingBag: [...prevState.shoppingBag, parseFloat(id)]}));
  }

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
              <ShoppingBag value={this.state.shoppingBag.length} />
            </div>
          </div>
          <div className="main-layout">
            <Route exact path="/" component={Home} />
            <Route path="/faq" component={Faq} />
            <Route path="/regulations" component={Regulations} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/product/:id"
              render={routeProps => (
                <ProductItem
                  id={routeProps.match.params.id}
                  addToBag={this.addToBag}
                />
              )}
            />
            <Route
              path="/bag"
              render={() => <Bag value={this.state.shoppingBag} />}
            />
            {/* <Route path='*' component={NotFound}/> */}
          </div>
          <Footer className="Footer nav-home" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
