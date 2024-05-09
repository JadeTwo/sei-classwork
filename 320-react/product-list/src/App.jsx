import './App.css'

import FilterableProductTable from './components/FilterableProductTable'

import PRODUCTS from "../data"

function App() {

  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  )
}

export default App
