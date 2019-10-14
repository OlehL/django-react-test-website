import React from 'react';

export const UserItem = ({user}) =>{
    return (
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.created}</td>
            <td>{user.group}</td>
            <td align="center">
                <a href="/users/{user.name}/edit" className="btn btn-outline-secondary">Edit</a>
                <a href="/users/{user.name}/delete" className="btn btn-outline-secondary">Delete</a>
            </td>
        </tr>
    )
}