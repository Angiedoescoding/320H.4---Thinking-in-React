import { useState } from 'react'
import './App.css'
import FilterableProductTable from './components/FilterableProductTable'
import { productData } from './data/productData.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FilterableProductTable products={productData} />
    </>
  )
}

export default App
