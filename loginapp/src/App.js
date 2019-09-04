import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      errorMessage: ''
    }
  }

  navigate() {
    this.context.router.push('/');
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/verify", this.state)
      .then(Response => {
        console.log(Response.data.loginResult);
        if (!Response.data.loginResult)
          this.setState({ errorMessage: 'Login or password not valid, please try again!' })
        else {
          window.location = 'http://localhost:3001/';
        }

      });
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello AOS</h1>
          <form onSubmit={this.mySubmitHandler}>
            <p>{this.state.errorMessage}</p>
            <input type="text" name="login" placeholder="Email" onChange={this.changeHandler}></input>
            <br></br>
            <input type="password" name="password" placeholder="Password" onChange={this.changeHandler}></input>
            <br></br>
            <input type='submit' />
          </form>
        </header>
      </div>
    );
  }

  welcomePage = () => {
    return (
      <h3>Welcome {this.state.login}</h3>
    );
  };
}

export default App;
