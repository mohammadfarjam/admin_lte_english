import React, {Component} from 'react';
import  axios from "axios";

class ShowPost extends Component {
    constructor(props) {
        super(props);
    }
    state={
        showPost:[],
    }
componentDidMount() {
     axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id).then(
         response=>{
             this.setState({showPost:response.data})
         }
     )
}

    render() {

        return (
<div className='col-12 bg-white pt-3 pb-5'>
    <div className='form-group col-6 offset-md-1'>
        <label htmlFor='title'>Title :</label>
        <input className='form-control' name='title' value={this.state.showPost.title} />
    </div>


    <div className='form-group col-6 offset-md-1'>
        <label htmlFor='title'>Description :</label>
        <textarea className='form-control'  style={{minHeight:'200px'}} value={this.state.showPost.body}></textarea>
    </div>
</div>






        );
    }
}

export default ShowPost;