import React, {Component} from 'react';

/*component*/
import ComponentContent from '../component/content';

/*module logic*/
import * as LogicApp from '../logic/app';

export default class App extends Component{
    constructor(props){
        super(props);
        LogicApp.initialize.call(this);
    }
    render(){
        return (
            <div className="b-app__self">
               <h1>My Container APP</h1>
               <button onClick={LogicApp.onClick.bind(this)}>
                   INCREMENT
               </button>
               <ComponentContent myNumber={LogicApp.getCurrentNumber.call(this)}/>
            </div>
        );
    }
};
