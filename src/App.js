import React, {Component} from 'react';
import './App.css';
import ItemCollection from './containers/ItemCollection'
import ItemSearch from './components/ItemSearch'
import ItemFilterSort from './components/ItemFilterSort'


export default class App extends Component {
  state={
    allItems:[
      {
        "id":1,
        "name":"Appleton's",
        "category": "Rum",
        "price": 24.40
      },
      {
        "id":2,
        "name":"Boodle's",
        "category": "Gin",
        "price": 20.10
      },
      {
        "id":3,
        "name":"Jack Daniel's",
        "category": "Whiskey",
        "price": 26
      },
      {
        "id":4,
        "name":"E.H. Taylor",
        "category": "Whiskey",
        "price": 41.82
      },
      {
        "id":5,
        "name":"Hendrick's",
        "category": "Gin",
        "price": 34.50
      },
      {
        "id":6,
        "name":"Grey Goose",
        "category": "Vodka",
        "price": 37.80
      },
      {
        "id":7,
        "name":"Ketel One",
        "category": "Vodka",
        "price": 32.50
      },
      {
        "id":8,
        "name":"Forteleza Blanco",
        "category": "Tequila",
        "price": 46.30
      },
      {
        "id":9,
        "name":"Espolon Reposado",
        "category": "Tequila",
        "price": 22.67
      },
      {
        "id":10,
        "name":"Plantation Pineapple",
        "category": "Rum",
        "price": 31.99
      }
    ],
    displayItems: [],
    searchFilter: ''
  }

  componentDidMount(){
    this.setState({
      displayItems: this.state.allItems
    })
  }

  filterByCategory = (category) => {
    if(category !== 'All'){
      this.setState({
        displayItems: this.state.allItems.filter( item => item.category === category)
      })
    }else{
      this.setState({
        displayItems: this.state.allItems
      })
    }
  }

  sortItems = (sortBy) => {
    let sortedItems = []
    switch(sortBy){
      case "A-Z":
        sortedItems = this.state.displayItems.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        break
      case "Price":
        sortedItems = this.state.displayItems.sort((a,b) => a.price > b.price ? 1 : -1)
        break
      default:
        console.log("not an option")
      }
      this.setState({
        displayItems: sortedItems
      })
  }

  setSearchFilter = (searchFilter) => {
    this.setState({
      searchFilter: searchFilter
    }, () => {
      this.search()
    })
  }

  search = () => {
    let displayItems = this.state.allItems.filter(item => {
      return item.name.toLowerCase().includes(this.state.searchFilter.toLowerCase())
    })
    this.setState({displayItems})
  }

  render(){
    return (
      <div className="App">
        <ItemSearch search={this.setSearchFilter}/> 
        <ItemFilterSort filter={this.filterByCategory} sortItems={this.sortItems}/>
        <ItemCollection allItems={this.state.displayItems}/>
      </div>
    );
  }
}


