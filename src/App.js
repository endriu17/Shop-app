import React, { Component } from "react";
import { Route, BrowserRouter, Link, Switch, Redirect } from "react-router-dom";
import Navi from "./components/Navi/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/sites/Home";
import ShoppingBag from "./components/sites/ShoppingBag";
import NotFound from "./components/sites/NotFound";
import ProductItem from "./components/Product/ProductItem/ProductItem";
import Contact from "./components/sites/Contact";
import Faq from "./components/sites/Faq";
import Regulations from "./components/sites/Regulations";
import ShoppingBagLink from "./components/ShoppingBag/ShoppingBagLink";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shoppingBag: [],
      counter: 0
    };

    this.addToBag = this.addToBag.bind(this);
    this.removeFromBag = this.removeFromBag.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addToBag(id) {
    const found = this.state.shoppingBag.find(x => {
      return x.id === parseFloat(id);
    });

    if (found) {
      found.count = found.count + 1;
      this.setState({
        shoppingBag: this.state.shoppingBag.map(item => {
          return {
            ...item,
            [item.id]: found.id,
            [item.count]: found.count
          };
        }),
        counter: this.state.shoppingBag.reduce((acc, count) => {
          return acc + count.count;
        }, 0)
      });
    } else {
      this.state.shoppingBag.length === 0
        ? this.setState({
            shoppingBag: [{ id: parseFloat(id), count: 1 }],
            counter: 1
          })
        : this.setState(prevState => {
            return {
              shoppingBag: [
                { id: parseFloat(id), count: 1 },
                ...prevState.shoppingBag
              ],
              counter: 1
            };
          });
    }
  }

  removeItem(id) {
    const found = this.state.shoppingBag.find(x => x.id === parseFloat(id));
    found.count = found.count - 1;
    if (found.count > 0) {
      this.setState({
        shoppingBag: this.state.shoppingBag.map(item => ({
          ...item,
          [item.id]: found.id,
          [item.count]: found.count
        })),
        counter: this.state.shoppingBag.reduce(
          (acc, count) => acc + count.count,
          0
        )
      });
    } else {
      this.setState({
        shoppingBag: [
          ...this.state.shoppingBag.filter(item => item.id !== found.id)
        ],
        counter: this.state.shoppingBag.reduce(
          (acc, count) => acc + count.count,
          0
        )
      });
    }
  }

  removeFromBag(id) {
    const found = this.state.shoppingBag.find(x => x.id === parseFloat(id));
    this.setState({
      shoppingBag: [
        ...this.state.shoppingBag.filter(item => item.id !== found.id)
      ]
    });
    setTimeout(() => {
      this.setState({
        counter: this.state.shoppingBag.reduce(
          (acc, count) => acc + count.count,
          0
        )
      });
    }, 10);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="header-wrapper">
            <div className="hidden-nav_wrapper">
              <Link className="navi-logo" to="/">
                <img src="/photos/logoShop.png" alt={"logo"} />
                <span className="logo-text">Lighting</span>
              </Link>
              <div className="nav-home">
                <Navi />
                <ShoppingBagLink value={this.state.counter} />
              </div>
            </div>
          </div>
          <div className="main-layout">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route
                path="/order/:type/:direction"
                render={routeProps => <Home {...routeProps} />}
              />
              <Route path="/faq" component={Faq} />
              <Route path="/regulations" component={Regulations} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/product/:id"
                render={props => (
                  <ProductItem
                    id={props.match.params.id}
                    addToBag={this.addToBag}
                    removefromBag={this.removeFromBag}
                    bag={this.state.shoppingBag}
                    {...props}
                  />
                )}
              />
              <Route
                path="/shoppingbag"
                render={props => (
                  <ShoppingBag
                    bag={this.state.shoppingBag}
                    addToBag={this.addToBag}
                    removeItem={this.removeItem}
                    removeFromBag={this.removeFromBag}
                    {...props}
                  />
                )}
              />
              <Route path="/404" component={NotFound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </div>
          <Footer className="footer nav-home" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
