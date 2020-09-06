import React, {Component} from 'react';
import  axios from "axios";

class Newpost extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            description:'',
        }
    }

    postdatatoserver=()=>{
        const sendData={
            title:this.state.title,
            description:this.state.description,
        }
        axios.post('https://jsonplaceholder.typicode.com/posts' ,sendData).then(
            response=>{
                console.log(response)
            }
        )
}

    render() {
        return (
            <div className='col-12 bg-white pt-3 pb-5'>
                <div className='form-group col-6 offset-md-1'>
                    <label htmlFor='title'>Title :</label>
                    <input className='form-control' name='title' value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})}/>
                </div>
                <div className='form-group col-6 offset-md-1'>
                    <label htmlFor='title'>Description :</label>
                    <textarea className='form-control' value={this.state.description} onChange={(event)=>this.setState({description :event.target.value})}></textarea>
                </div>

                <div className='form-group col-6 offset-md-1 justify-content-end d-flex'>
                    <button className='btn btn-success mt-5 w-25' onClick={this.postdatatoserver}>Save</button>
                </div>
                </div>
        );
    }
}

export default Newpost;