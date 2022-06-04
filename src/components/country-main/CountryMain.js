import "./CountryMain.css";
import CountryTitle from "./components/country-title/CountryTitle";


const CountryMain = ({ country }) => {
    let data = country[0];
    console.log(country);
    return (
        <main>
            {
                country.length != 0 && Array.isArray(country) ?
                    <>
                        <CountryTitle countryTitle={data.name.common} />
                    </>
                    : <h2 className="data-kosong">... Data Kosong ...</h2>
            }
        </main>
    );
};

export default CountryMain;
