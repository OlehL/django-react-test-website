import React from 'react';
import { GroupItem } from './GroupItem';
import {NavLink} from 'react-router-dom'


 export const GroupList = ({groups}) => {
    return (
    <div className="container mt-5">
        <div className="col-md-auto">
            <div className="row align-items-center">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">GROUP NAME</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map(group => (<GroupItem group={group} key={group.id} />))}
                    </tbody>
                </table>
            </div>
            <div className="row">
                <NavLink className="btn btn-primary justify-content-end" to="/groups/add">Add Group</NavLink>
            </div>
        </div>
    </div>
    )
 }
