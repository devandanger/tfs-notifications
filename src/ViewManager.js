import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Settings from './containers/settings';
import Main from './components/App';
import { connect } from 'react-redux'
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
const store = createStore(rootReducer)

class ViewManager extends Component {
static Views() {
    return {
     settings: <Provider store={store}><Settings/></Provider>,
     main: <Provider store={store}><Main/></Provider>
    }
}
static View(props) {
    console.log("Props: " + props)
    let name = props.location.search.substr(1);
    let view = ViewManager.Views()[name];
    if(view == null) 
        throw new Error("View '" + name + "' is undefined");
    return view;
 }
 
 render() {
     return (
     <Router>
         <div>
             <Route path='/' component={ViewManager.View}/>
        </div>
    </Router>
    );}
}

// function mapStateToProps(state) {
//     return {
//         state: state
//     };
// }

//export default connect(mapStateToProps)(ViewManager)
export default ViewManager