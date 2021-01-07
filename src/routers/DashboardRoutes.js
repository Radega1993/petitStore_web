import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React from "react";

import { Footer } from '../components/home/Footer';
import { MainScreen } from '../components/main/MainScreen';
import { Navbar } from '../components/ui/Navbar';



export const DashboardRoutes = () => {


  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/main" component={ MainScreen } />
          <Route exact path="/main" component={ MainScreen } />

          <Redirect to='/main' />

        </Switch>
      </div>

      <Footer />
    </>
  );
}
