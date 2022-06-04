import { useState } from "react";
import Navbar from "./navbar/Navbar";
import SearchInput from "./search-input/SearchInput";
import CountryMain from "./country-main/CountryMain";

const Home = () => {
    let [country, setCountry] = useState([]);

    const eventSetCountry = (data) => {
        setCountry(data);
    };

    return (
        <>
            <Navbar />
            <SearchInput onSetCountry={eventSetCountry} />
            <CountryMain country={country} />
        </>
    );
};

export default Home;
