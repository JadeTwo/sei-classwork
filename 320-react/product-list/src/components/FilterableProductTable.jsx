import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

function FilterableProductTable({ products }) {
    return (
        <>
            <SearchBar />
            <ProductTable products={products} />
        </>
    )
}

export default FilterableProductTable