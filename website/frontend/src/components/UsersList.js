import React from 'react';
import { UserItem } from './UserItem';
import {NavLink} from 'react-router-dom'


 export const UsersList = ({users}) => {
    return (
    <div className="container mt-5">
        <div className="col-md-auto">
            <div className="row align-items-center">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">USER NAME</th>
                            <th scope="col">CREATED</th>
                            <th scope="col">GROUP</th>
                            <th scope="col">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (<UserItem user={user} key={user.id}/>))}
                    </tbody>
                </table>
            </div>
            <div className="row">
            <NavLink className="btn btn-primary justify-content-end" to="/users/add">Add User</NavLink>
            </div>
        </div>
    </div>
    )
 }
