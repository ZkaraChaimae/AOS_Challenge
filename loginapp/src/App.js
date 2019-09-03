import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      psd: '',
    };
  }
  formSubmitHandler (e) {    
    console.dir("wowowow");
    alert(this.state.email + this.state.psd);
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let em = this.state.email;
    alert(em);
  }
  myChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
  }
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <h1>Hello AOS</h1>
      
              <form onSubmit={this.mySubmitHandler}>
                <input type="text" name="login" onChange={this.myChangeHandler.bind(this)} placeholder="Email"></input>
                <br></br>
                <input type="password" name="password" onChange={this.myChangeHandler.bind(this)} placeholder="Password"></input>
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
