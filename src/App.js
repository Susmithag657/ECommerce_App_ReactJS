import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ItemList from "./Components/ItemList";
import Item from "./Components/Item";
import Details from "./Components/Details";
import ProductProvider from "./Components/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import CartPage from "./Components/Cart/CartPage";
import Modal from "./Components/Modal";
export default function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ItemList} />
            <Route path="/details/:id" component={Details} />
            <Route path="/cart" component={CartPage} />
            <Route path="/item/:id" component={Item} />
          </Switch>
          <Modal />
        </Router>
      </div>
    </ProductProvider>
  );
}
