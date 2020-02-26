// @ts-check
import App from './components/App';
import * as React from "react";
import * as ReactDOM from "react-dom";

const elem = document.createElement('div');
elem.id = 'app';
document.body.appendChild(elem);


ReactDOM.render(React.createElement(App), elem);


