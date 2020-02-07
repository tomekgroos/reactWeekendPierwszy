import React from "react";

export default class Person extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
           name: "Tomek",
           surname: "Groos",
           age: 30,
           sex: "m"
        };
    }

    

    render() {
        return (
            <div>
              
            </div>
        )
    };


}