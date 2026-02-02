import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/products";
import ProductDetails from "./products/productDetails/productDetails";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={<Home />} />
            <Route path="/about" exact component={<About />} />
            <Route path="/contact" exact component={<Contact />} />
            <Route path="/products" exact component={<Products />} />
            <Route path="/details/:id" exact component={<ProductDetails />} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
