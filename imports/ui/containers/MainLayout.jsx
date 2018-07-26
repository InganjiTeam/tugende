import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MiniHeader from '../components/miniHeader.jsx';
import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import Services from '../pages/Services.jsx';
import BuyTicket from '../pages/BuyTicket.jsx';
import About from '../pages/About.jsx';
import NotFound from '../pages/NotFound.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div >
          <Header />
          <MiniHeader />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/buyticket' component={BuyTicket} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}
