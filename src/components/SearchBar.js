import React from 'react'

const SearchBar = React.createClass({
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value, this.refs.inStockOnlyInput.checked)
  },

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange}/>
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} ref="inStockOnlyInput" onChange={this.handleChange}/>
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
})

export default SearchBar
