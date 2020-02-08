import React from "react";


export default class Person extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
           name: "",
           surname: "",
           age: null,
           sex: ""
        };
    }

    changeHandler = (e) => {

        this.setState({[e.target.name]: e.target.value});
    }




    render() {
        return(
            <div>

                <input value={this.state.name} label="imie" onChange={this.changeHandler}/>
                <h1>{this.state.name}</h1>

            </div>
        )
    }

}