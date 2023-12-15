//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';


function App() {
  /* Variables */
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = ({target: {value}}) => {
    setEmail(value);
  };

  const handlePasswordChange = ({target: {value}}) => {
    setPassword(value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email} Password: ${password}`);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div>
        <h2>Iniciar Sesion</h2>
        <form onSubmit={handleFormSubmit}>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange}/>

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />

          <input type="submit" value="Iniciar Sesion" />
        </form>
      </div>
    </div>
  );
}

export default App;
