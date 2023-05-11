import React, { useState, useEffect } from "react";
import useGeoLocation from "./useGeoLocation";
import RightSection from "./RightSection";

function Demo2() {
    const x = new Date();
    const [curr, setCurr] = useState(x);
    const [y, setY] = useState(null);
    const [z, setZ] = useState(null);
    const [city, setCity] = useState(null);
    const [temp, setTemp] = useState(null);
    const [a, setA] = useState(null);
    const location = useGeoLocation();
    const location2 = JSON.stringify(location.coordinates.lat);
    const location3 = JSON.stringify(location.coordinates.lng);
    console.log(location2, location3);
    useEffect(() => {
        const fetchApi = async () => {
            // setX(true);
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location2}&lon=${location3}&units=metric&appid=aac86e38c6df410e6010639de4a0a13f`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.name);
            setA(resJson.sys.country);
            setTemp(resJson.main.temp);
        }
        fetchApi();
    });
    const func = () => {
        const y = new Date();
        setCurr(y);
    }
    //   setInterval(func, 1000);
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <>
            <div className="main">
                <div className="main-items">
                    <h2>{city}</h2>
                    <h2>{a}</h2>
                    <div className="bottom-div">
                        <div className="bottom-div1">
                            <h3>{curr.getHours() < 10 ? "0" + curr.getHours() : curr.getHours()}:{curr.getMinutes() < 10 ? "0" + curr.getMinutes() : curr.getMinutes()}:{curr.getSeconds() < 10 ? "0" + curr.getSeconds() : curr.getSeconds()}</h3>
                            <h3>{day[curr.getDay()]}, {curr.getDate()} {month[curr.getMonth()]} {curr.getFullYear()}</h3>
                        </div>
                        <div className="bottom-div2">
                            <p>{Math.round(temp)}°<span>C</span></p>
                        </div>
                    </div>
                </div>
                <RightSection cityp={city}/>
            </div>
        </>
    );
}
export default Demo2;