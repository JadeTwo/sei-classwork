function SearchBar({ filterText, inStockOnly }) {
    return (
        <form>
            <input type="text" placeholder="Search..." value={filterText} />
            <label>
                <p>
                    <input type="checkbox" checked={inStockOnly} />
                    Only show products in Stock
                </p>
            </label>
        </form>
    )
}

export default SearchBar