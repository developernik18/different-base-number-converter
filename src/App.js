import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue:0,
      decimalValue:0,
      binaryValue:0,
      octalValue:0,
      hexadecimalValue:0
    };
  }

  render() {
    return (
      <div className="center">
        <h1> Number Converter </h1>
        <input type="number"
         placeholder="Enter a Decimal Number"
         value={this.state.inputValue} 
        /> 
        <table class="center mobile-view margin-space">
          <caption><h2> Converted values </h2></caption>
          <tr>
            <th>
              Decimal Value
            </th>
            <th>
              Binary Value
            </th>
            <th>
              Octal Value
            </th>
            <th>
              Hexadecimal Value
            </th>
          </tr>
          <tr>
            <td>
              { this.state.decimalValue }
            </td>
            <td>
              { this.state.binaryValue }
            </td>
            <td>
              { this.state.octalValue }
            </td>
            <td>
              { this.state.hexadecimalValue }
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
