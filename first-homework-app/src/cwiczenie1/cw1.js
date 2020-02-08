import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            surname: '',
            age: null,
            sex: "",
            errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let errAge = '';
        let errName = '';
        let errSurname = '';
        let errSex = '';
        let errCapital = '';


        if (nam === "age") {
            if (val !="" && !Number(val)) {
                errAge = <strong>Your age must be a number</strong>;

            }
            this.setState({errormessage: errAge});
        }
        

        if (nam == "username"){
            if (val.length <= 2){
                errName = <strong>Your name must be more than 2 characters</strong>;
            }  
            this.setState({errormessage: errName});
        }

        if (nam == "sex"){
            if (val !== "m" || val !=="k"){
                errSex = <strong>To twoj moment! Zdecyduj czy jestes kobieta "k",
                    czy mezczyzna "m"
                </strong>;
            }  
            this.setState({errormessage: errSex});
        }

        if (nam == "surname"){
            if (val.length <= 2){
                errSurname = <strong>Your surname must be more than 2 characters</strong>;
            }  
            this.setState({errormessage: errSurname});
        }

        if (nam == "username" || nam == "surname") {
            if (val != "[A-Z]{1}[^\s]+"){
                errCapital = <strong>Please begin with Capital letter</strong>
            }
            this.setState({errormessage: errCapital});
        }
        

        this.setState({[nam]: val});
    }

    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.age}{this.state.surname} of Sex {this.state.sex}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your surname:</p>
                <input
                    type='text'
                    name='surname'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />

                <p>Enter your sex:</p>
                <input
                    type='text'
                    name='sex'
                    onChange={this.myChangeHandler}
                />

               <br/> <br/> {this.state.errormessage}
            </form>
        );
    }
}