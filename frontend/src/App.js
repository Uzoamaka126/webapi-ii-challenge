import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as actions from './state/actionCreators';
// Import components
import Home from './components/Home';
import Navbar from './components/Navbar';

function App({ state, getPosts }) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Route exact path="/" component={Home}/>
        </main>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    state,
  }
}

export default connect(mapStateToProps, actions)(App);