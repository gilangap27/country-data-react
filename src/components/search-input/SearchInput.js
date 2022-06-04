import "./SearchInput.css";

const SearchInput = (props) => {
    return (
        <div className="search-data">
            <h1 className="search-title">Search Country</h1>
            <input type="text" name="search" id="search" />
            <button className="cari-data">Cari</button>
        </div>
    );
};

export default SearchInput;
