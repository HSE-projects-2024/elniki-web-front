mport React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './styles/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Developedoffer from './pages/Developedoffer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainPage } from "./pages/MainPage.jsx";
import { OrderPage } from "./pages/OrderPage.jsx";
import { BuyingPage } from "./pages/BuyingPage.jsx";

import RegPage from "./regLogComponents/regComponents/RegPage";
import LogPage from './regLogComponents/logComponents/LogPage';

function App() {
  return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
    <Route path='/' element={<MainPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/buy' element={<BuyingPage />} />
					<Route path="/" element={<Home />} />
					<Route path="/services.html" element={<Developedoffer />} />
            <Route
                        exact
                        path='/'
                        element={<LogPage />}
                    />
                    <Route
                        path='/reg'
                        element={<RegPage />}
                    />
				</Routes>
				<Footer />
			</Router>
		</div>
  );
}
export default App;
