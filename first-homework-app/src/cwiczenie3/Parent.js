import React from 'react';
import Calc from "./Calc"

export default class Parent extends React.Component {

        constructor(props) {
            super(props);

            this.state = {

                sum: 0,
                
            };

        }
                

        add = () => {
            this.setState ({sum: this.state.sum += this.state.value});
        }
            

            render () {


                return (

                    <div>
                        <Calc click={this.add}/>
                     <p>{this.state.sum}</p>

                    </div>
                );
            }


    }