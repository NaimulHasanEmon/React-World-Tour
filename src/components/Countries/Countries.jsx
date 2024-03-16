import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

export default function Countries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="country-container">
            {
                countries.map(country => <Country key={country} country={country}></Country>)
            }
            </div>
        </div>
    );
}