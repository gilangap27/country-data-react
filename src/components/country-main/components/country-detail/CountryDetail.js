import "./CountryDetail.css";

const CountryDetail = ({ countryData }) => {
    const numberFormat = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const getLanguage = () => {
        let lang = [];
        for (let i in countryData.languages) {
            lang.push(countryData.languages[i]);
        }
        return lang
    }

    const getCurr = () => {
        let curr = [];
        for (let i in countryData.currencies) {
            curr.push(countryData.currencies[i].name + ` (${countryData.currencies[i].symbol}) `);
        }
        return curr
    }

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
                    {getCurr().map((curr) => <p key={curr}>- {curr}</p>)}
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
                    {getLanguage().map((lang) => <p key={lang}>- {lang}</p>)}
                </li>
                <li>
                    <b>Population</b>
                    <p className="population">{numberFormat(countryData.population)} people</p>
                </li>
                <li>
                    <b>Timezone</b>
                    {countryData.timezones.map(time => <p key={time}>- {time}</p>)}
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