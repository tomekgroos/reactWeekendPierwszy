import React from 'react';



export default class LifecycleTest extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                counter: null,
                text: "Licznik: "
            }
        }
    
        addValue = () => {
            this.setState({counter: this.state.counter + 1})

            console.log(this.counter);
        }

        shouldComponentUpdate () {
            return this.state.counter > 9;
        }

        

    render() {

        

        return (
            <div>
               
               <button onClick={this.addValue}>Dodaj wartosc</button>

                <p> {this.state.counter}</p>
                
            </div>
            
        );
    }
    
}

