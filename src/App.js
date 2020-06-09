import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './View/About';
import Home from './View/Home';
import Product from './View/Product'

function App() {
  return (
    <div className="relative pb-16 min-h-screen" >

      <Router>

        <Header />

        <div className="px-3"><Switch>

          <Route exact path="/" component={Home} />

          <Route path="/about" component={About} />
          <Route path="/product/:id" component={Product} />

        </Switch></div>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
