import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import UserProfile from './pages/UserProfile';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products/:slug' component={SingleProduct} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/users/:slug' component={UserProfile} />

          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}