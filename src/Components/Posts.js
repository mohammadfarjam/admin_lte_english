import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
        }
    }


   async componentDidMount() {
        try{
         const data=await axios.get('https://jsonplaceholder.typicode.com/postshy')
       if (data.status === 200){
           this.setState({posts: data.data})
       }else{
           throw 'FAIL'
       }

        }catch (e) {
            console.log(e)
            alert(e)
        }


    }

deletePost=(id)=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id).then(
            response=>{
                console.log(response);
            }
        )
}


    render() {
        let length=this.state.posts.length;
        if (length > 0){
            return (
                <div className="col-12 pt-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Posts</h3>
                            <div className="card-tools">
                                <div className="input-group input-group-sm" style={{width: 250}}>
                                    <input type="text" name="table_search" className="form-control float-right"
                                           placeholder="Search"/>
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-default"><i className="fas fa-search"/>
                                        </button>
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
                                    <th className='text-center'>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.posts.slice(0, 5).map((post) => (
                                    <tr key={post.id}>
                                        <td className='text-center'>{post.userId}</td>
                                        <td className='text-center'>{post.title.substring(0, 50)}...</td>
                                        <td className='text-center'>{post.body.substring(0, 50)}...</td>
                                        <td className='text-center'><Link to={`showPost/${post.id}`}>
                                            <button className='btn btn-warning'>View</button>
                                        </Link></td>
                                        <td className='text-center'>
                                            <button className='btn btn-danger'
                                                    onClick={() => this.deletePost(post.id)}>Delete
                                            </button>
                                        </td>
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
        }else {
            return (
                <div className="col-12 pt-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Posts</h3>
                            <div className="card-tools">
                                <div className="input-group input-group-sm" style={{width: 250}}>
                                    <input type="text" name="table_search" className="form-control float-right"
                                           placeholder="Search"/>
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-default"><i className="fas fa-search"/>
                                        </button>
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
                                    <th className='text-center'>Delete</th>
                                </tr>
                                </thead>
                            </table>
                            <div className='d-flex col-12 p-5'>
                                <h4 className='d-flex justify-content-center mx-auto'>Loading posts</h4>
                            </div>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>

              )
        }

        }
}

export default Posts;