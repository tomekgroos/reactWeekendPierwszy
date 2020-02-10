import React from 'react';
import LowestChild from './LowestChild';


export default class NestedInParent extends React.Component {


    render() {

        return (
            <div>
                <LowestChild human = {this.props.author}/>

            </div>
        );
    }

}