import React from 'react'

export default function Education(props) {
    return (
    <table>
        <thead>
        <tr>
            <th>School</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
            <input onChange={props.onChange}/>
            </td>
        </tr>
        </tbody>
    </table>
    )
}
