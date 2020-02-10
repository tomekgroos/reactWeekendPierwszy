import React from 'react';

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            surname: '',
            age: null,
            gender: "",
            errormessage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let errAge = '';
        let errName = '';
        let errGender = '';


        if (nam === "age") {
            if (val !="" && !Number(val)) {
                errAge = <strong>Your age must be a number</strong>;

            }
            this.setState({errormessage: errAge});
        }
        
    

        if (nam == "username" || nam== "surname"){
            if (val.length <= 2){
                errName = <strong>Your name and surname must be more than 2 characters</strong>;
            }  
            this.setState({errormessage: errName});
        }

       

        if (nam === "username" || nam === "surname") {
            if (!/^[A-Z][a-z0-9_-]{0,19}$/.test(val)){
                errName = <strong>Please begin with Capital letter</strong>
            }
            this.setState({errormessage: errName});
        }
        
        if (nam == "gender"){
            if (val != 'm' && val !='k'){
                errGender = <strong> Zdecyduj czy jestes kobieta "k",
                    czy mezczyzna "m"
                </strong>;
            }  
            this.setState({errormessage: errGender});
        }

        this.setState({[nam]: val});
    }


    

    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.surname} your age is {this.state.age} and your gender is {this.state.gender}</h1>
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

                <p>Enter your gender:</p>
                <input
                    type='text'
                    name='gender'
                    onChange={this.myChangeHandler}
                />

               <br/> <br/> {this.state.errormessage}
            </form>
        );
    }
}