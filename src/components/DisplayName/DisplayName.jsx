import React from 'react';

const DisplayName = (props) =>{
    return (
        <div>
            <h1>First Name + Last Name</h1>
            <h2>{props.firstName}  {props.lastName}</h2>
            <hr />
        </div>
    )
}

export default DisplayName