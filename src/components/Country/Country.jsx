import { useState } from "react";
import './Country.css'

const Country = ({ country }) => {
    console.log(country);
    const { name, capital, flags, continents, timezones, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`} style={{border: "2px solid purple",borderRadius: "15px",padding: "10px",margin: "10px",}}>
            <h3>Country Name: {name.common}</h3>
            <p>Capital Name: {capital}</p>
            <p>Country Flag: </p>
            <img style={{borderRadius: "10px"}} src={flags.png} alt="" />
            <p>Continents: {continents}</p>
            <p>Timezones: {timezones}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button>Mark Visited.</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited.' : 'I want to visit.'}
        </div>
    );
};

export default Country;