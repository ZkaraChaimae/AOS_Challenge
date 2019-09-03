import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let email = data.get("login");
    let psd = data.get("password");
    alert(email + " " + psd);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello AOS</h1>

          <form onSubmit={this.mySubmitHandler}>
            <input type="text" name="login" placeholder="Email"></input>
            <br></br>
            <input type="password" name="password" placeholder="Password"></input>
            <br></br>
            {/* <button onClick={this.formSubmitHandler.bind(this)}>Submit</button> */}
            <input type='submit' />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
