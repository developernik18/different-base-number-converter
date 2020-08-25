import React from 'react';
import './App.css';

import Input from './components/Input'
import Output from './components/Output';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue:0,
      outputValue:{
        decimalValue:0,
        binaryValue:0,
        octalValue:0,
        hexadecimalValue:0
      }
    };
  }

  onInputChangeHandler(ev) {
    this.setState({inputValue: ev.target.value});
  }

  render() {
    return (
      <div className="center">
        <h1> Number Converter </h1>
        <Input 
          inputValue={this.state.inputValue}
          onChange={(ev) => this.onInputChangeHandler(ev)} /> 
        <Output outputValue={this.state.outputValue}/>
      </div>
    );
  }
}

export default App;
