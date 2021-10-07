import React from 'react';

const NamesList = (props) =>{
    return (
        <div>
            <h2>List of names:</h2>
            {props.names.map(function(name){
              return <ul><li>{name}</li></ul>
              
          })}
           
        </div>
    )
}

export default NamesList;