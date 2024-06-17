import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './styles/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Developedoffer from './pages/Developedoffer';
import About from './pages/About';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderPage } from "./orderBuyingComponents/OrderPage";
import { BuyingPage } from "./orderBuyingComponents/BuyingPage";

import RegPage from "./regLogComponents/regComponents/RegPage";
import LogPage from './regLogComponents/logComponents/LogPage';

function App() {
  return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
          <Route path="/" element={<Home />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/buy' element={<BuyingPage />} />
          <Route path="/services.html" element={<Developedoffer />} />
          <Route path='/login' element={<LogPage />}/>
          <Route path='/reg' element={<RegPage />}/>
	<Route path="/accommodation" element={<div>Accommodation Page</div>} />
          <Route path="/abouttheresort" element={<About/>} />
          <Route path="/account" element={<div>Account Page</div>} />
          <Route path="/contact" element={<Contact/>} />
				</Routes>
				<Footer />
			</Router>
		</div>
  );
}
export default App;
