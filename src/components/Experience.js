import React from 'react'

export default function Experience(props) {
    return (
        <table>
        <thead>
        <tr>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Location</th>
            
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
            <input type="text" name="company" onChange={props.onChange}/>
            </td>

            <td>
            <input type="text" name="title" onChange={props.onChange}/>
            </td>

            <td>
            <input type="date" name="start" onChange={props.onChange}/>
            </td>

            <td>
            <input type="date" name="end" onChange={props.onChange}/>
            </td>

            <td>
            <input type="text" name="location" onChange={props.onChange}/>
            </td>
        </tr>
        </tbody>
    </table>
    )
}
