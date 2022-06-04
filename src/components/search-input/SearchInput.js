import "./SearchInput.css";

const SearchInput = ({ onSetCountry }) => {
    const getSearchInput = async () => {
        const searchInput = document.querySelector("#search").value;
        onSetCountry(await getDataAPI(searchInput));
    }

    const getDataAPI = async (country) => {
        return await fetch("https://restcountries.com/v3.1/name/" + country)
            .then((response) => response.json())
    }

    return (
        <div className="search-data">
            <h1 className="search-title">Search Country</h1>
            <input type="text" name="search" id="search" />
            <button className="cari-data" onClick={getSearchInput}>Cari</button>
        </div>
    );
};

export default SearchInput;
