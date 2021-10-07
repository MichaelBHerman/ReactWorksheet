import React from 'react';
const Superheroes = (props) => {
    return(
        <div>
            <table>
                <tbody>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Primary Ability</th>
                            <th>Secondary Ability</th>
                        </tr>
                    </thead>
                    {props.superheroes.map(function(superhero){
                        return (
                        <tr>
                            <td>{superhero.name}</td>
                            <td>{superhero.primaryAbility}</td>
                            <td>{superhero.secondaryAbility}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Superheroes