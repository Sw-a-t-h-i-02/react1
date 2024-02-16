
// import {component} from "react";
// import ChildButton from "./child";

// class Counter extends  component{
//     constructor(){
//            super()
//            this.state={
//             count:0
//            }

//     }

//     handleIncrement=(data)=>{
//         this.setState({
//           count: this.state.count+data
//         })
//       }


//     render(){
//         return(
//             <>
//             <h1>Counter</h1>
//             <h2>{this.state.count}</h2>
//             <ChildButton  handleIncrementMethod={this.handleIncrement}/>
//             </>
//         )
//     }
// }
// export default Counter




import React, { Component } from 'react';
import ChildButton from "./child"

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    HandleIncrement = (data) => {
        this.setState({
            count: this.state.count+data
        });
    }

    render() {
        return (
            <>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                <ChildButton HandleIncrementMethod={this.HandleIncrement} />
            </>
        );
    }
}

export default Counter;