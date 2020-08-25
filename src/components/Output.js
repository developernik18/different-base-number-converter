import React from 'react';

const Output = props => {
  return (
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
          { props.outputValue.decimalValue }
        </td>
        <td>
          { props.outputValue.binaryValue }
        </td>
        <td>
          { props.outputValue.octalValue }
        </td>
        <td>
          { props.outputValue.hexadecimalValue }
        </td>
      </tr>
    </table>
  );
};

export default Output;