import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from "./path1"
import Paragraph from "./path2"
import Button from "./path3"
import Submit from "./path4"


export default function Switcher() {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/path1">Header</Link>
                    </li>
                    <li>
                        <Link to="/path2">Paragraph</Link>
                    </li>
                    <li>
                        <Link to="/path3">Button</Link>
                    </li>
                    <li>
                        <Link to="/path4">Submit</Link>
                    </li>



                </ul>

                <Switch>
                    <Route path="/path1">
                        <Header/>
                    </Route>

                    <Route path="/path2">
                        <Paragraph/>
                    </Route>

                    <Route path="/path3">
                        <Button/>
                    </Route>


                    <Route path="/path4">
                        <Submit/>
                    </Route>


                </Switch>

            </div>


        </Router>
    );

}