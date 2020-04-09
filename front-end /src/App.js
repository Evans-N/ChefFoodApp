import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Pages/homePage';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import customerDash from './Pages/Customer/customerDash';
import chefReports from './Pages/Chef/chefReports';
import createOrders from './Pages/Chef/createOrder';


function App() {
  return (
    <Router>

      <div className='App'>

        <Route path='/' component={Navbar}/>
        <Route exact path='/' component={Homepage}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Signup' component={SignUp}/>
        <Route path='/Profile' component={customerDash}/>
        <Route path='/Reports' component={chefReports}/>
        <Route path='/Orders' component={createOrders}/>
        
      </div>
      
    </Router>
  );
}

export default App;
