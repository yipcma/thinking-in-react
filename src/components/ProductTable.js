import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable = React.createClass({
  render() {
    return(
      <div>
      <ProductCategoryRow />
      <ProductRow />
      </div>
    )
  }
})

export default ProductTable
