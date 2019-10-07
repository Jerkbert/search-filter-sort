import React from 'react'

export default function ItemCard(props) {
    return (
        <div>
            <h1>{props.item.name} - ${parseFloat(props.item.price).toFixed(2)}</h1>
        </div>
    )
}
