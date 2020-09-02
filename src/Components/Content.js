import React, {Component} from 'react';
import Dashboard from "./Dashboard";
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import Users from "./Users";
import Posts from "./Posts";
import showPost from "./showPost";

class Content extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid pt-3">
                        <Switch>
                            <Route path='/dashboard'  component={Dashboard}/>
                            <Redirect exact from={"/"} to="/dashboard"/>
                            <Route path='/users'  component={Users}/>
                            <Route path='/posts'   component={Posts}/>
                            <Route path='/showPost/:id'  component={showPost}/>

                        </Switch>
                    </div>
                </section>





           </div>
        );
    }
}

export default Content;