import './App.css'

import FilterableProductTable from './components/FilterableProductTable'

import products from './data'



function App() {

  return (
    <>
      <FilterableProductTable products={products} />
    </>
  )
}

export default App
