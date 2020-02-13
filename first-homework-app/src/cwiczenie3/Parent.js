import React from 'react';
import Calc from "./Calc"

export default class Parent extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                sum: 0,
            };
            
            this.makeSum = this.makeSum.bind(this);
            this.resetSum = this.resetSum.bind(this);
        }
         
        makeSum = () => {

            var getValue = prompt("Podaj liczbę:");

            if(isNaN(getValue)){
                alert("To nie jest liczba! Spróbój jeszcze raz i podaj liczbę.");
            } else {
            
            let value = this.state.sum + Number(getValue);
            this.setState({sum: value})
            }
            
    
        }

        resetSum = () => {

            this.setState({sum: 0})
    
        }

            render () {

                return (

                    <div>
                        <Calc setValue={this.makeSum} reset={this.resetSum} />
                    
                <p>Suma: {this.state.sum}</p>
                

                    </div>
                );
            }


    }

