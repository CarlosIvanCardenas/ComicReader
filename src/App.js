import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import ComicDetails from "./components/ComicDetails";
import ComicList from "./components/ComicList";
import Chapter from "./components/Chapter";

function App() {
    return (
        <Router>
            <Fragment>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={ComicList}/>
                    <Route path="/comic/:id" exact component={ComicDetails}/>
                    <Route path="/comic/:id/chapter/:cid" component={Chapter} />
                </Switch>
            </Fragment>
        </Router>
    );
}

export default App;
