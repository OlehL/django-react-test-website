import React from 'react';

export const GroupItem = ({group}) =>{
    return (
        <tr>
            <th scope="row">{group.id}</th>
            <td>{group.name}</td>
            <td>{group.description}</td>
            <td align="center">
                <a href="/users/{user.name}/edit" className="btn btn-outline-secondary">Edit</a>
                <a href="/users/{user.name}/delete" className="btn btn-outline-secondary">Delete</a>
            </td>
        </tr>
    )
}