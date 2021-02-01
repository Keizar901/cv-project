import React from 'react'

export default function Education(props) {
    return (
    <table>
        <thead>
        <tr>
            <th>Name of University</th>
            <th>Location</th>
            
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
            <input type="text" name="institution" onChange={props.onChange}/>
            </td>

            <td>
            <input type="text" name="location" onChange={props.onChange}/>
            </td>
        </tr>
        </tbody>
    </table>
    )
}
