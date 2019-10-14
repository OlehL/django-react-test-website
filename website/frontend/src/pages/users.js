import React, {Fragment} from 'react';
import axios from 'axios';
import { UsersList } from '../components/UsersList';


export class Users extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(res => {
                const users= res.data;
                this.setState(users);
            })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                <h2>Users</h2>
                <UsersList users={this.state.users}/>
                </div>
            </Fragment>
        )
    }
}
