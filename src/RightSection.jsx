import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ReactAnimatedWeather from "react-animated-weather";
const RightSection = (props) => {
    const [city3, setCity3] = useState(props.cityp);
    useEffect(() => {
        setCity3(props.cityp);
        setCity2(city3);
    }, [props.cityp, city3])
    const [search, setSearch] = useState("");
    const [city2, setCity2] = useState("");
    const [temp2, setTemp2] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [visibility, setVisibility] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    // const [icon, setIcon] = useState(null);
    const [icon2, setIcon2] = useState("Haze");
    // console.log(icon2);
    // console.log(city2);
    // console.log(icon);
    useEffect(() => {
        const fetchApi = async () => {
            // setX(true);
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&units=metric&appid=aac86e38c6df410e6010639de4a0a13f`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            // setCity(resJson.name);
            // setA(resJson.sys.country);
            setTemp2(resJson.main.temp);
            setHumidity(resJson.main.humidity);
            setVisibility(resJson.visibility);
            setWindSpeed(resJson.wind.speed);
            setIcon2(resJson.weather[0].main);
        }
        fetchApi();
    }, [city2]);
    // if(icon2==="Clouds"){
    //     setIcon("CLOUDY");
    //     // break;
    // }
    const inputFunc = (event) => {
        setSearch(event.target.value);
    }
    const searchFunc = () => {
        setCity2(search);
    }
    const defaults = {
        color: "white",
        size: 112,
        animate: true,
    };
    // switch (icon2) {
    //     case "Haze":
    //         setIcon("CLEAR_DAY")
    //         break;
    //     case "Clouds":
    //         setIcon("CLOUDY");
    //         break;
    //     case "Rain":
    //         setIcon("RAIN");
    //         break;
    //     case "Snow":
    //         setIcon("SNOW");
    //         break;
    //     case "Dust":
    //         setIcon("WIND");
    //         break;
    //     case "Drizzle":
    //         setIcon("SLEET");
    //         break;
    //     case "Fog":
    //         setIcon("FOG");
    //         break;
    //     case "Smoke":
    //         setIcon("FOG");
    //         break;
    //     case "Tornado":
    //         setIcon("WIND");
    //         break;
    //     default:
    //         setIcon("CLEAR_DAY");
    // // }
    // if(icon2==="Haze"){
    //     setIcon("CLEAR_DAY");
    // }
    // else if(icon2==="Clouds"){
    //          setIcon("CLOUDY");
    // }
    return (
        // <div className="main-items">
        //     <div className="status">
        //         {icon2==="Clouds"&&<ReactAnimatedWeather icon={"CLOUDY"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //         {icon2==="Haze"&&<ReactAnimatedWeather icon={"CLEAR_DAY"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //         {icon2==="Rain"&&<ReactAnimatedWeather icon={"RAIN"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //         {icon2==="Snow"&&<ReactAnimatedWeather icon={"SNOW"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //         {icon2==="Dust"&&<ReactAnimatedWeather icon={"WIND"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //         {icon2==="Drizzle"&&<ReactAnimatedWeather icon={"SLEET"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //         {icon2==="Fog"&&<ReactAnimatedWeather icon={"FOG"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //         {icon2==="Smoke"&&<ReactAnimatedWeather icon={"FOG"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //         {icon2==="Tornado"&&<ReactAnimatedWeather icon={"WIND"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //         {icon2==="Clear"&&<ReactAnimatedWeather icon={"CLEAR_DAY"} color={defaults.color} size={defaults.size} animate={defaults.animate}/>}
        //     </div>
        //     <div className="input">
        //         <input type="search" placeholder="Search any city" onChange={inputFunc} />
        //         <IconButton className="b" onClick={searchFunc}><SearchIcon /></IconButton>
        //     </div>
        //     <h4>Shiv Shakti Nagar</h4>
        //     <hr/>
        //     <div className="details">
        //         <p>Temperature</p>
        //         <h5>{Math.round(temp2)}°c ({icon2})</h5>
        //     </div>
        //     <hr />
        //     <div className="details">
        //         <p>Humidity</p>
        //         <h5>{humidity}%</h5>
        //     </div>
        //     <hr />
        //     <div className="details">
        //         <p>Visibility</p>
        //         <h5>{visibility} mi</h5>
        //     </div>
        //     <hr />
        //     <div className="details">
        //         <p>Wind Speed</p>
        //         <h5>{windSpeed} Km/h</h5>
        //     </div>
        // </div>
        <div className="col-md-4 bg-right p-4 d-flex flex-column align-items-center main3">
            <div>
                {icon2 === "Clouds" && <ReactAnimatedWeather icon={"CLOUDY"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
                {icon2 === "Haze" && <ReactAnimatedWeather icon={"CLEAR_DAY"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
                {icon2 === "Rain" && <ReactAnimatedWeather icon={"RAIN"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
                {icon2 === "Snow" && <ReactAnimatedWeather icon={"SNOW"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
                {icon2 === "Dust" && <ReactAnimatedWeather icon={"WIND"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
                {icon2 === "Drizzle" && <ReactAnimatedWeather icon={"SLEET"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
                {icon2 === "Fog" && <ReactAnimatedWeather icon={"FOG"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
                {icon2 === "Smoke" && <ReactAnimatedWeather icon={"FOG"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
                {icon2 === "Tornado" && <ReactAnimatedWeather icon={"WIND"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
                {icon2 === "Clear" && <ReactAnimatedWeather icon={"CLEAR_DAY"} color={defaults.color} size={defaults.size} animate={defaults.animate} />}
            </div>
            <div className="d-flex mb-2 justify-content-center w-75">
                <input type="search" placeholder="Search any city" className="w-100 text-white fs" onChange={inputFunc}/>
                <IconButton className="b" onClick={searchFunc}><SearchIcon /></IconButton>
            </div>
            <h3 className="my-2 text-white fs2" style={{textTransform:"capitalize"}}>{city2}</h3>
            <hr className="w-100" />
            <div className="d-flex justify-content-between w-75 text-white">
                <p className="h5 fw-normal fs">Temperature</p>
                <h5 className="fw-bolder text-end fs">{Math.round(temp2)}°c ({icon2})</h5>
            </div>
            <hr className="w-100" />
            <div className="d-flex justify-content-between w-75 text-white">
                <p className="h5 fw-normal fs">Humidity</p>
                <h5 className="text-end fw-bolder fs">{humidity}%</h5>
            </div>
            <hr className="w-100" />
            <div className="d-flex justify-content-between w-75 text-white">
                <p className="h5 fw-normal fs">Visibility</p>
                <h5 className="text-end fw-bolder fs">{visibility} mi</h5>
            </div>
            <hr className="w-100" />
            <div className="d-flex justify-content-between w-75 text-white">
                <p className="h5 fw-normal fs">Wind Speed</p>
                <h5 className="text-end fw-bolder fs">{windSpeed} Km/h</h5>
            </div>
        </div>
    );
}
export default RightSection;