import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import {Redirect} from "react-router";
import Users from "./Users";

class Menu extends Component {

    state={
        activeMenu:false,
    }

    activeMenu=(value)=>{
        console.log(value)
        this.setState({
            activeMenu:value,
        })
    }

    render() {
        return (


                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <span className="brand-text font-weight-light">Admin Panel</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Mohammad</a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

                                <li className="nav-item">
                                    <NavLink to="/dashboard" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                        </p>
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/users" onClick={this.activeMenu.bind(this,'users')} className="nav-link">
                                        <i className="nav-icon fas fa-user-alt" />
                                        <p>
                                           Users
                                        </p>
                                    </NavLink>
                                </li>


                                <li className="nav-item has-treeview">
                                    <a href="#" className={this.state.activeMenu === 'post' ? 'nav-link active' :'nav-link'}>
                                        <i className="nav-icon fas fa-paste"></i>
                                        <p>
                                            Posts
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./index.html" className="nav-link">
                                                <i className="nav-icon fas fa-plus-circle"></i>
                                                <p>New Post</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="posts" onClick={this.activeMenu.bind(this,'post')} className="nav-link">
                                                <i className="nav-icon fas fa-mail-bulk"></i>
                                                <p>All Post</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>


                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>



        );
    }
}

export default Menu;