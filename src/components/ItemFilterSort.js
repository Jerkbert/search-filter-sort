import React from 'react'

export default function ItemFilterSort(props) {
    return (
        <div>
            <label>
                <input type="radio" value="A-Z" name="sort" checked={null} onChange={(event => props.sortItems(event.target.value))}/>
                A-Z
            </label>
            <label>
                <input type="radio" value="Price" name="sort" checked={null} onChange={(event) => props.sortItems(event.target.value)}/>
                Price
            </label>
            <br/>
            <label>Filter by Category</label>
                <select onChange={(event) => props.filter(event.target.value)}>
                    <option value="All">All</option>
                    <option value="Rum">Rum</option>
                    <option value="Tequila">Tequila</option>
                    <option value="Gin">Gin</option>
                    <option value="Whiskey">Whiskey</option>
                    <option value="Vodka">Vodka</option>
                </select>
        </div>
    )
}
