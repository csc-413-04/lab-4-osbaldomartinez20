import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'balck',
      banner: 'hello',
      isOpen: false,
      isEmpty: false,
      val: 0,
    };
    this.buttonHanler = this.buttonHanler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.emptyPage = this.emptyPage.bind(this);
    this.valUP = this.valUP.bind(this);
  }

  valUP() {
    this.setState({
      val: this.state.val + 1,
    });
  }

  buttonHanler() {
    this.setState( {
      isOpen: !this.state.isOpen,
    });
  }

  emptyPage() {
    this.setState({
      isEmpty: !this.state.isEmpty,
    });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    });
  }

  render() { 
    let myVariable = <h2>Osbaldo</h2>;
    let myBanner;
    console.log(this.state.val);
    if (this.state.isOpen) {
        myBanner = this.state.banner
    }
    if (this.state.isEmpty) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I have no idea what I am doing, but I do know that I want to sleep.
          </p>
          <h2>{myBanner}</h2>
          <input value={this.state.banner} onChange={this.textHandler}/>
          <button onClick={this.buttonHanler}>Something</button>
          <button onClick={this.valUP}>Counter</button>
          <p></p>
          <button onClick={this.emptyPage}>Empty</button>
        </header>
      </div>
    );
    } else {
      return(
        <div className="App">
          <header className="App-header">
            <button onClick={this.emptyPage}>Not Empty</button>
          </header>
        </div>
      );
    }
    
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
