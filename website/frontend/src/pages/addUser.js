import React from 'react';
import axios from 'axios';


export class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {name: ''};
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        axios.post('http://127.0.0.1:8000/api/groups/', {name: this.state.name})
        .then(res => {
            console.log(res.data);
            console.log(res);
        })
      }

    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="mt-1">User Name:</label>
                        <input type="text" className="form-control" name="name" onChange={this.onChange} />
                        <button type="submit" className="mt-3 btn btn-primary justify-content-end">Add user</button>
                    </div>
                </form>
            </div>
            )
    }
}