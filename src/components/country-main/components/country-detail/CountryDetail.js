import "./CountryDetail.css";

const CountryDetail = ({ countryData }) => {
    const numberFormat = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return (
        <div className="detail-country">
            {/* Bagian 1 */}
            <ul className="bag1">
                <li>
                    <b>Capital Country</b>
                    <p className="capital">{countryData.capital}</p>
                </li>
                <li>
                    <b>Currencies</b>
                </li>
                <li>
                    <b>Region</b>
                    <p className="region">{countryData.region}</p>
                </li>
                <li>
                    <b>Sub-region</b>
                    <p className="subregion">{countryData.subregion}</p>
                </li>
            </ul>
            {/* Bagian 2 */}
            <ul className="bag2">
                <li>
                    <b>Languages</b>
                </li>
                <li>
                    <b>Population</b>
                    <p className="population">{numberFormat(countryData.population)} people</p>
                </li>
                <li>
                    <b>Timezone</b>
                </li>
                <li>
                    <b>Area</b>
                    <p className="area">{numberFormat(countryData.area)} km²</p>
                </li>
            </ul>
        </div>
    );
}

export default CountryDetail;