import React, {Component} from 'react';
import Dashboard from "./Dashboard";
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import Users from "./Users";
import Posts from "./Posts";

class Content extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <Switch>
                            <Route path='/dashboard'  component={Dashboard}/>

                            <Redirect exact from={"/"} to="/dashboard"/>

                            <Route path='/users'  component={Users}/>
                            <Route path='/posts'  component={Posts}/>

                        </Switch>
                    </div>
                </section>





           </div>
        );
    }
}

export default Content;