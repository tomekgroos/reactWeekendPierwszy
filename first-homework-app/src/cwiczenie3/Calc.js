import React from 'react';




export default class Calc extends React.Component {
    
    

    render() {
       
       

    return(

        <div>
           <button onClick={this.props.setValue}>
                 Wprowadz liczbe: 
                
           </button>
            
           <button onClick={this.props.reset}>
                 Resetuj
                
           </button>

    
        </div>    
    );
    }


}
