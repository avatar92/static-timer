import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
/*import * as serviceWorker from './serviceWorker';*/

const Statictimer = () =>
    <div className="staticTimer">
        <div className="timeContainer">
            <span className="num">
                00
            </span>
            <span className="description">hour</span>
        </div>
        <span className="doublePoint">:</span>
        <div className="timeContainer">
            <span className="num">
                30
            </span>
            <span className="description">minute</span>
        </div>
        <span className="doublePoint">:</span>
        <div className="timeContainer">
            <span className="num">
                00
            </span>
            <span className="description">second</span>
        </div>
    </div>

 
ReactDOM.render(<Statictimer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
