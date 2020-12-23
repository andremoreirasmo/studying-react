import './ProductTable.css'
import React from 'react'
import products from '../../data/products'

export default props => {
  return (
    <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => {
            return (
              <tr className={i % 2 === 0 ? 'even': ''} key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}