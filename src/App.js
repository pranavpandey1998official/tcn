import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './navbar/Navbar';
import LogOut from './logOut/logOut';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
       
        <div className="App">
          <LogOut />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
