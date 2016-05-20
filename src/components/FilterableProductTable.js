import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

// the state consideration, three asks:
// 1. Is it passed in from a parent via props? If so, it probably isn't state.
// 2. Does it change over time? If not, it probably isn't state.
// 3. Can you compute it based on any other state or props in your component? If so, it's not state.

const FilterableProductTable = React.createClass({
  getInitialState() {
    return {
      filterText: '',
      inStockOnly: false
    }
  },

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
        <ProductTable products={this.props.data} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
      </div>
    )
  }
})

export default FilterableProductTable
