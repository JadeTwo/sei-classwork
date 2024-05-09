function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <p>
                    <input type="checkbox" />
                    Only show products in Stock
                </p>
            </label>
        </form>
    )
}

export default SearchBar