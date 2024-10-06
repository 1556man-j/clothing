import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import Collection from './components/pages/Collection';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Order from './components/pages/Order';
import Products from './components/pages/Products';
import PlaceOrder from './components/pages/PlaceOrder';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:[9vw]'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/product/:productId" element={<Products/>}/>
          <Route path="/place-order" element={<PlaceOrder/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
