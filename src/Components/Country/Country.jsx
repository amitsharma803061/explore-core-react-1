import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.area.area)


    const handleVisited = () => {
        // first system
        // if(visited) {
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // second system 
        // setVisited(visited ? false : true);

        // third system 
        setVisited(!visited)
        handleVisitedCountries(country)
    }


    return (
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
        <div className={`Country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h2>Continents: {country.continents.continents}</h2>
            <h2>Population: {country.population.population}</h2>
            <h2>Capital: {country.capital.capital}</h2>
            <h2>Area: {country.area.area},  {
                country.area.area > 300000 ? "big country" : 'small country'
            }</h2>
            <h2>Region: {country.region.region}</h2>
            <div className='button-container'>
                <button onClick={handleVisited} className='visited'>
                    {visited ? 'Visited' : 'Not Visited'}
                </button>
                <button onClick={() => { handleVisitedFlag(country.flags.flags.png)}} className='addFlags'>
                    Add visited flags
                </button>
            </div>
        </div>
    );
};

export default Country;