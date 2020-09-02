import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class Posts extends Component {
    constructor(props) {
        super(props);
    }

    state={
        posts:[],
    }

    componentDidMount() {
       axios.get('https://jsonplaceholder.typicode.com/posts').then(
           response=>{
        this.setState({posts :response.data})
           }
       )
    }

    render() {
        return (

                <div className="col-12 pt-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Posts</h3>
                            <div className="card-tools">
                                <div className="input-group input-group-sm" style={{width: 250}}>
                                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover text-nowrap">
                                <thead>
                                <tr className='bg-gradient-green'>
                                    <th className='text-center'>ID</th>
                                    <th className='text-center'>Title</th>
                                    <th className='text-center'>Description</th>
                                    <th className='text-center'>View</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.posts.slice(0,5).map((post)=>(
                                    <tr key={post.id}>
                                        <td className='text-center'>{post.userId}</td>
                                        <td className='text-center'>{post.title.substring(0,50)}...</td>
                                        <td className='text-center'>{post.body.substring(0,50)}...</td>
                                        <td className='text-center'><Link to={`showPost/${post.id}`}><button className='btn btn-warning'>View</button></Link></td>

                                    </tr>
                                ))}

                                </tbody>
                            </table>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>

        );
    }
}

export default Posts;