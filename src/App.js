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
    const binValue = this.calculateBinaryValue(ev.target.value);
    const octValue = this.calculateOctalValue(ev.target.value);
    const hexValue = this.calculateHexadecimalValue(ev.target.value);

    let outputValue = {
      decimalValue: ev.target.value,
      binaryValue : binValue,
      octalValue: octValue,
      hexadecimalValue: hexValue
    }

    this.setState({outputValue: outputValue})
    
  }

  calculateBinaryValue(input) {
    let binStr = ''
    
    while(input){
      let r = input%2;
      input = Math.floor(input/2);
      binStr = r + binStr;
    }

    return binStr;
  }

  calculateOctalValue(input) {
    let octStr = ''
    
    while(input){
      let r = input%8;
      input = Math.floor(input/8);
      octStr = r + octStr;
    }

    return octStr;
  }

  calculateHexadecimalValue(input) {
    let hexStr = ''
    
    while(input){
      let r = input%16;
      input = Math.floor(input/16);
      if(r>9){
        r = String.fromCharCode(r+55);
      }
      hexStr = r + hexStr;
    }

    return hexStr;
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
