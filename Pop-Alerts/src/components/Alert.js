import React from 'react';

const Alert = (props)=>{
    return (
      <tr className="alert">
        <td>
          <p>{props.artist}</p>
          <button className="edit">Edit</button>
        </td>
      </tr>
    )
}


export default Alert
