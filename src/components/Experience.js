import React from 'react'

export default function Experience(props) {
    return (
        <table>
        <thead>
        <tr>
            <th>Name of Company</th>
            <th>Role</th>
            <th>Location</th>
            
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
            <input type="text" name="company" onChange={props.onChange}/>
            </td>

            <td>
            <input type="text" name="role" onChange={props.onChange}/>
            </td>

            <td>
            <input type="text" name="location" onChange={props.onChange}/>
            </td>
        </tr>
        </tbody>
    </table>
    )
}
