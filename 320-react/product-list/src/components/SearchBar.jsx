function SearchBar({ filterText, inStockOnly, setFilterText, setInStockOnly }) {


    return (
        <form>
            <input 
                type="text" 
                placeholder="Search..." 
                value={filterText} 
                onChange={(e) => setFilterText(e.target.value)}
            />
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