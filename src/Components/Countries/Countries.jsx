import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        console.log('added visited need flags', flag)
        const newVisitedFlags =[...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h2>Total Country Visited: {visitedCountries.length}</h2>
            <h2>Total country Flags: {visitedFlags.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='Countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;