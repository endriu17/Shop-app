import React, { Component } from "react";
import { Route, BrowserRouter, Link, Switch, Redirect } from "react-router-dom";
import Navi from "./components/Navi/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/sites/Home";
import Bag from "./components/sites/Bag";
// import NotFound from "./components/sites/NotFound";
import ProductItem from "./components/Product/ProductItem/ProductItem";
import Contact from "./components/sites/Contact";
import Faq from "./components/sites/Faq";
import Regulations from "./components/sites/Regulations";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingBag: [],
      counter: 0
    };

    this.addToBag = this.addToBag.bind(this);
    this.removeFromBag = this.removeFromBag.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addToBag(id) {
    const found = this.state.shoppingBag.find(x => x.id === parseFloat(id));

    if (found) {
      found.count = found.count + 1;
      this.state.shoppingBag.map(item => ({
        ...item,
        [item.id]: found.id,
        [item.count]: found.count
      }));
    } else {
      this.state.shoppingBag.length === 0
        ? setTimeout(() => {
            this.setState({
              shoppingBag: [{ id: parseFloat(id), count: 1 }],
              counter: 1
            });
          }, 10)
        : this.setState(prevState => ({
            shoppingBag: [
              { id: parseFloat(id), count: 1 },
              ...prevState.shoppingBag
            ],
            counter: 1
          }));
    }
    setTimeout(() => {
      this.setState({
        counter: this.state.shoppingBag.reduce(
          (acc, count) => acc + count.count,
          0
        )
      });
    }, 10);
  }

  removeItem(id) {
    const found = this.state.shoppingBag.find(x => x.id === parseFloat(id));
    found.count = found.count - 1;
    if (found.count > 0) {
      this.state.shoppingBag.map(item => ({
        ...item,
        [item.id]: found.id,
        [item.count]: found.count
      }));
      setTimeout(() => {
        this.setState({
          counter: this.state.shoppingBag.reduce(
            (acc, count) => acc + count.count,
            0
          )
        });
      }, 10);
    } else {
      setTimeout(() => {
        this.setState({
          shoppingBag: [
            ...this.state.shoppingBag.filter(item => item.id !== found.id)
          ],
          counter: this.state.shoppingBag.reduce(
            (acc, count) => acc + count.count,
            0
          )
        });
      }, 10);
    }
  }

  removeFromBag(id) {
    const found = this.state.shoppingBag.find(x => x.id === parseFloat(id));
    (id === -1)
    ? this.setState({
      shoppingBag: [],
      counter: 0,
    })
    : setTimeout(() => {
      this.setState({
        shoppingBag: [
          ...this.state.shoppingBag.filter(item => item.id !== found.id)
        ],
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
            <Link className="navi-logo" to="/">
              <span>Shop app</span>
            </Link>
            <div className="nav-home">
              <Navi />
              <ShoppingBag value={this.state.counter} />
            </div>
          </div>
          <div className="main-layout">
            <Switch>
              <Route
                exact
                path={["/", "/order/:type/:direction"]}
                component={Home}
              />
              <Route path="/faq" component={Faq} />
              <Route path="/regulations" component={Regulations} />
              <Route path="/contact" component={Contact} />
              {/* <Route path="/404" component={NotFound} /> */}
              {/* <Redirect from="*" to="/404" /> */}
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
                render={() => (
                  <Bag
                    bag={this.state.shoppingBag}
                    addToBag={this.addToBag}
                    removeItem={this.removeItem}
                    removeFromBag={this.removeFromBag}
                  />
                )}
              />
            </Switch>
          </div>
          <Footer className="footer nav-home" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
