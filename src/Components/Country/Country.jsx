import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country.region.region)
    return (
        <div className='Country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h2>Continents: {country.continents.continents}</h2>
            <h2>Population: {country.population.population}</h2>
            <h2>Capital: {country.capital.capital}</h2>
            <h2>Languages:</h2>
            <h2>Region: {country.region.region}</h2>
        </div>
    );
};

export default Country;