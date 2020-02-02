import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Navbar from './pages/navbar/navbar';
import Home from './views/Home/Home';
import  Characters from './views/Characters/Characters';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">


			<BrowserRouter>
				<Route exact path="/" component={Home} />
        <Route exact path="/Characters" component={Characters} />
			</BrowserRouter>
		</div>
	);
}

export default App;
