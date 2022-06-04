import "./CountryMain.css";
import CountryTitle from "./components/country-title/CountryTitle";
import CountryImg from "./components/country-img/CountryImg";
import CountryDetail from "./components/country-detail/CountryDetail";


const CountryMain = ({ country }) => {
    let data = country[0];

    return (
        <main>
            {
                country.length != 0 && Array.isArray(country) ?
                    <>
                        <CountryTitle countryTitle={data.name.common} />
                        <CountryImg countryFlag={data.flags.svg} countryCoat={data.coatOfArms.svg} />
                        <CountryDetail />
                    </>
                    : <h2 className="data-kosong">... Data Kosong ...</h2>
            }
        </main>
    );
};

export default CountryMain;
