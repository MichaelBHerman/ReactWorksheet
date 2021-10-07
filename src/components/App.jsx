import React, {Component} from 'react';
import AlertUser from './AlertUser/AlertUser';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import Superheroes from './SuperheroTable/SuperheroTable';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes: [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondaryAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondaryAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondaryAbility: 'Shoots web'
            }
          ]
        }
      }
    button = (event) =>{
        event.preventDefault();
        alert('devCodeCamp!!!')
      }

    render (){
        return (
        <div>
            <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
            <NamesList names={this.state.names}/>
            <AlertUser click={this.button} />
            <Superheroes superheroes={this.state.superheroes}/>
        </div>
        );
    }
}

export default App;