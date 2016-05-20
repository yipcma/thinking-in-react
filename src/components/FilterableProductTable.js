import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = React.createClass({
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.data} />
      </div>
    )
  }
})

export default FilterableProductTable
