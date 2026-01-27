import './App.css'
import { BrowserRouter as Router , Switch , Route, Link  } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Products from './products/products';

function App() {
  return (
  <>
  <Header />
    <Router>
      <Switch>
      <Route path="/" exact component={<Home />} />
      <Route path="/about" exact component={<About />} />
      <Route path="/contact" exact component={<Contact />} /> 
      <Route path="/products" exact component={<Products />} /> 
      </Switch>
       </Router>
      <Footer />
  </>
  )
}

export default App
