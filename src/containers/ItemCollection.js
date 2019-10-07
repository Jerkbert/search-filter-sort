import React from 'react'

export default function ItemCollection(props) {
    
    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {props.allItems.map(item => (
                    
                    <tr>
                        <td>{item.name}</td>
                        <td>${parseFloat(item.price).toFixed(2)}</td>
                        <td>{item.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
       
    </div>
    )
}
