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
    this.removeFromBag = this.removeFromBag.bind(this);
    this.state = {
      shoppingBag: [{ id: 1, count: 1 }, { id: 2, count: 1 }, { id: 3, count: 1 }]
    };
  }

  addToBag(id) {
    const  iD = parseFloat(id);
    this.setState(prevState => ({
      shoppingBag: [...prevState.shoppingBag, { id: iD, count: 1 }]
    }));
    const map = this.state.shoppingBag.reduce(function (map, e) {
      map[e.id] = +e.count + (map[e.count] || 0) 
      return map
    }, {})
    
    const result = Object.keys(map).map(function (k) {
      return { id: parseFloat(k), count: map[k] }
    })
    this.setState({
      shoppingBag: result
    })
  }

  removeFromBag(id){
    const itemList = this.state.shoppingBag.filter(item => item.id === parseFloat(id));
    console.log('click to remove', id, itemList)
  }
  render() {
    console.log(this.state.shoppingBag);
    return (
      <BrowserRouter>
        <div className="app">
          <div className="header-wrapper">
            <Link className="navi-logo" to="/">
              <span>Shop app</span>
            </Link>
            <div className="nav-home">
              <Navi />
              <ShoppingBag
                value={this.state.shoppingBag.reduce(
                  (acc, { count }) => acc + count,
                  0
                )}
              />
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
                  removefromBag={this.removeFromBag}
                />
              )}
            />
            <Route
              path="/bag"
              render={() => <Bag bag={this.state.shoppingBag} removeFromBag={this.removeFromBag}/>}
            />
            {/* <Route path='*' exact={true} component={NotFound}/> */}
          </div>
          <Footer className="footer nav-home" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
