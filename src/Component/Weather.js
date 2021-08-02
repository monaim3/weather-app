import React, { useEffect, useState } from 'react';
import   './Weather.css';
const Weather = () => {
    const [input,setInput]=useState(null)
    const [search,setSearch]=useState("")
    useEffect(() =>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=bd0d11f854f0a623fd866cd2f32971a9`
         fetch(url)
         .then(res=>res.json())
         .then(data=>setSearch(data.main))
        },[input])
    return (
        <>
        <div className="weather">
            <div className="inputData">
            <input type="text" placeholder="Search city..." onChange={
            (event)=> {setInput(event.target.value)}}/>
            </div>
            {!search? (
                <p> <h3>Data is not found</h3></p>
            )
       :
       <div className="">
            <div className="info">
                 <h3>{input}</h3>
             </div>
           <div className="temp">
               <h1>{search.temp} Celsius</h1>
               <h5>Min {search.temp_min} Cel | Max 
               {search.temp_max} Cel</h5>
           </div>
           </div>
            }
        </div>
        </>
    );
};

export default Weather;