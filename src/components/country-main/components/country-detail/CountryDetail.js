import "./CountryDetail.css";

const CountryDetail = () => {
    return (
        <div className="detail-country">
            {/* Bagian 1 */}
            <ul className="bag1">
                <li>
                    <b>Capital Country</b>
                    <p className="capital"></p>
                </li>
                <li>
                    <b>Currencies</b>
                </li>
                <li>
                    <b>Region</b>
                    <p className="region"></p>
                </li>
                <li>
                    <b>Sub-region</b>
                    <p className="subregion"></p>
                </li>
            </ul>
            {/* Bagian 2 */}
            <ul className="bag2">
                <li>
                    <b>Languages</b>
                </li>
                <li>
                    <b>Population</b>
                    <p className="population"></p>
                </li>
                <li>
                    <b>Timezone</b>
                </li>
                <li>
                    <b>Area</b>
                    <p className="area"></p>
                </li>
            </ul>
        </div>
    );
}

export default CountryDetail;