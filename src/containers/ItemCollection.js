import React from 'react'
import ItemCard from '../components/ItemCard'

export default function ItemCollection(props) {
    const itemCards = props.allItems.map( item => (
        <ItemCard item={item}/>
    ))
    return (
        <div>
            {itemCards}
        </div>
    )
}
