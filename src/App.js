import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
       
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/checkout" exact>
          <Checkout/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
