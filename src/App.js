import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { pedirPermissaoParaReceberNotificacoes } from "./push-notification";

class App extends Component {
  state = {
    token: ""
  };

  obterToken = () => {
    pedirPermissaoParaReceberNotificacoes().then(token =>
      this.setState({
        token
      })

    );

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.obterToken} value={this.state.token}>
          Clique aqui para receber notificações
        </button>

        <h1>token: {this.state.token}</h1>
      </div>
    );
  }
}

export default App;
