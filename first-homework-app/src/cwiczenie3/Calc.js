import React from 'react';



export default class Calc extends React.Component {

    

    click = () => {
        this.value = prompt("Wprowadz Liczbe:");
    }

    render() {

        

        return (
            <div>
               <button type="button" onClick={this.props.click}>Wprowadz liczbe</button>
            
                
            </div>
            
        );
    }
    
}

