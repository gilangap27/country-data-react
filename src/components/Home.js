import { useState } from "react";
import Navbar from "./navbar/Navbar";
import SearchInput from "./search-input/SearchInput";

const Home = () => {
    let [country, setCountry] = useState([]);

    const eventSetCountry = (data) => {
        setCountry(data);
    };

    return (
        <>
            <Navbar />
            <SearchInput onSetCountry={eventSetCountry} />
        </>
    );
};

export default Home;
