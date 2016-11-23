/*
 Component: Content
 */

import React, {Component} from 'react';

export default class ComponentContent extends Component {
    constructor(props){
        super(props);
        console.log("ComponentContent:constructor");
    };

    componentWillMount(){
        console.log("ComponentContent:componentWillMount");
    };

    componentWillReceiveProps(newProps){
        console.log("ComponentContent:componentWillReceiveProps");
    };

    shouldComponentUpdate(newProps, newState){
        console.log("ComponentContent:shouldComponentUpdate");
        return true;
    };

    componentDidUpdate(prevProps, prevState){
        console.log("ComponentContent:componentDidUpdate");
    };

    componentWillUnmount(prevProps, prevState){
        console.log("ComponentContent:componentWillUnmount");
    };

    render() {
        console.log("ComponentCountDown:render");
        return ( <div> Counting.. {this.props.myNumber} </div> );
    };
};
