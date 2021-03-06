import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
      isEmpty: false,
      val: 0,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.emptyPage = this.emptyPage.bind(this);
    this.valUP = this.valUP.bind(this);
    console.log(this.props)
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    })
  }

  valUP() {
    this.setState({
      val: this.state.val + 1,
    });
  }

  emptyPage() {
    this.setState({
      isEmpty: !this.state.isEmpty,
    });
  }

  render() {
    let myVariable = <h1>{this.state.banner}</h1>;
    let myBanner;
    if (this.state.isOpen) {
      myBanner = <Header banner={this.state.banner}/>;
    }
    if (this.state.isEmpty) {
    return (
      <div onClick={this.buttonHandler} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myVariable}
          </p>
          {myBanner}
          {
            this.state.isOpen && 
            <Header banner={this.state.banner}/>
          }
          <input value={this.state.banner} onChange={this.textHandler}/>
          <button  onClick={this.buttonHandler}>Something</button>
          <button onClick={this.valUP}>Counter</button>
          <p></p>
          <button onClick={this.emptyPage}>Empty</button>
        </header>
      </div>
    );
     }else {
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
