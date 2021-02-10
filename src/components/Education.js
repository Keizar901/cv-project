import React from 'react'

export default function Education(props) {
    return (
    <table>
        <thead>
        <tr>
            <th>School</th>
            <th>Country</th>
            <th>State/Province</th>
            <th>Field</th>
            <th>Level of Education</th>
            
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
            <input type="text" name="school" onChange={props.onChange}/>
            </td>

            <td>
            <input type="text" name="country" onChange={props.onChange}/>
            </td>

            <td>
            <input type="text" name="province" onChange={props.onChange}/>
            </td>

            <td>
            <input type="text" name="field" onChange={props.onChange}/>
            </td>

            <td>
            <select name="level" onChange={props.onChange}>
                <option value="associate">Associate</option>
                <option value="bachelors">Bachelors</option>
                <option value="masters">Masters</option>
                <option value="doctorate">Doctoral</option>
            </select>
            </td>
        </tr>
        </tbody>
    </table>
    )
}
