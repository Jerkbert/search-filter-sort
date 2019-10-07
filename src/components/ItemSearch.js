import React, { Component } from 'react'

export default class ItemSearch extends Component {
    state={
        input:''
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        }, () => {
            this.props.search(this.state.input)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.search(this.state.input)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="imput" 
                    placeholder="Search by name"
                    value={this.state.input}
                    onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}
