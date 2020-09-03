import React, {Component} from 'react';

class Newpost extends Component {
    render() {
        return (
            <div className='col-12 bg-white pt-3 pb-5'>
                <div className='form-group col-6 offset-md-1'>
                    <label htmlFor='title'>Title :</label>
                    <input className='form-control' name='title' value='sm' />
                </div>
                </div>
        );
    }
}

export default Newpost;