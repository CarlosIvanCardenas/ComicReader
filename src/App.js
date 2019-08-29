import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import ComicDetails from "./components/ComicDetails";
import ComicList from "./components/ComicList";

function App() {
    return (
        <Router>
            <Fragment>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={ComicList}/>
                    <Route path="/details/:id" component={ComicDetails}/>
                </Switch>
            </Fragment>
        </Router>
    );
}

export default App;
