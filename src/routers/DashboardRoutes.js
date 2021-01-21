import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React from "react";

import { Footer } from '../components/home/Footer';
import { MainScreen } from '../components/main/MainScreen';
import { Navbar } from '../components/ui/Navbar';
import { ShopScreen } from '../components/main/ShopScreen';
import { ShopsScreen } from '../components/main/ShopsScreen';



export const DashboardRoutes = () => {


  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/main" component={ MainScreen } />
          <Route exact path="/categoria/:id" component={ ShopsScreen } />
          <Route exact path="/categoria/tienda/:id" component={ ShopScreen } />

          <Redirect to='/main' />

        </Switch>
      </div>

      <Footer />
    </>
  );
}
