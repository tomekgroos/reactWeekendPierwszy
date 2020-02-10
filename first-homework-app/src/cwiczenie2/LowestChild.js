import React from 'react';


export default class LowestChild extends React.Component {


    render() {

        return (
            <div>
                <p>{this.props.human.name}</p>
                <p>{this.props.human.surname}</p>
                <p>{this.props.human.age}</p>

            </div>
        );
    }

}