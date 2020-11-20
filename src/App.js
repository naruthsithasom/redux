import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.data}
          <div>
            <button onClick={()=>this.props.puls({type:'INCREATE'})}>+</button>
            <button onClick={()=>this.props.minus({type:'DECREATE'})}>-</button>
            <button onClick={()=>this.props.reset({type:'RESET'})}>reset</button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.count
  }
}
const mapDispatchToProps = dispatch => {
  return {
    puls: (action) => dispatch(action),
    minus: (action) => dispatch(action),
    reset: (action) => dispatch(action),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
