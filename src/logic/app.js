/*
   Logic Layer: LogicApp
   Description: Only has the app funcionality
*/

export function initialize() {
    this.state = {
        number: 0
    };
};

export function onClick() {
    this.setState({
        number: this.state.number + 1
    });
};

export function getCurrentNumber(){
    return this.state.number;
};
