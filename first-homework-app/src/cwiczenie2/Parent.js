import React from 'react';
import NestedInParent from "./nestedInParent"

export default class Parent extends React.Component {


    render() {

            const person = {
            name: "John",
            surname: "Smith",
            age: 30
        };

        return (
            <div>
                <NestedInParent author = {person} />

            </div>
        );
    }

}