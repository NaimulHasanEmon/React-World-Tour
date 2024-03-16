const Country = ({ country }) => {
    console.log(country);
    const { name, capital, flags, continents, timezones, population, area } = country;
    return (
        <div style={{border: "2px solid purple",borderRadius: "15px",padding: "10px",margin: "10px",}}>
            <h3>Country Name: {name.common}</h3>
            <p>Capital Name: {capital}</p>
            <p>Country Flag: </p>
            <img src={flags.png} alt="" />
            <p>Continents: {continents}</p>
            <p>Timezones: {timezones}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country; 