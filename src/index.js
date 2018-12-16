import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker'
import Root from './Root';
import ViewManager from "./ViewManager"


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//const store = createStore(rootReducer)
const rootElement = document.getElementById("root");
render( <ViewManager />, rootElement)


// render(<Root store={store} />, document.getElementById("root"))