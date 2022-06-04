import "./CountryImg.css";

const CountryImg = ({ countryFlag, countryCoat }) => {
    return (
        <div className="img-area">
            <img
                src={countryFlag}
                alt="flag-country"
                width={200}
                className="flag-country"
            />
            <img
                src={countryCoat}
                alt="coat-of-arm"
                width={120}
                className="coat-of-arm"
            />
        </div>
    )
};

export default CountryImg;