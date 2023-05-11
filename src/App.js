// import logo from './logo.svg';
import React from "react";
// import './App.css';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import useGeoLocation from "./useGeoLocation";
import axios from "axios";
import RightSection from "./RightSection";

const App = () => {
  const location = useGeoLocation();
  const location2 = JSON.stringify(location.coordinates.lat);
  const location3 = JSON.stringify(location.coordinates.lng);
  // console.log(location2, location3);
  const x = new Date();
  const [latitude, setLatitude] = useState(location2);
  const [longitude, setLongitude] = useState(location3);
  const [curr, setCurr] = useState(x);
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [a, setA] = useState(null);
  // console.log(location2);
  // console.log(location3);
  // navigator.geolocation.getCurrentPosition((position) => {
  //   setLatitude(position.coords.latitude);
  //   setLongitude(position.coords.longitude);
  // });
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   setLatitude(position.coords.latitude);
    //   setLongitude(position.coords.longitude);
    // });
    // const fetchApi = async () => {
    // setX(true);
    // navigator.geolocation.getCurrentPosition((position) => {
    //   setLatitude(position.coords.latitude);
    //   setLongitude(position.coords.longitude);
    // })
    // console.log(latitude);
    // console.log(longitude);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=aac86e38c6df410e6010639de4a0a13f`;
    console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=aac86e38c6df410e6010639de4a0a13f`);
    // let response = await fetch(url);
    // let resJson = await response.json();
    axios.get(url)
      .then((response) => {
        console.log(response);
      })
    // console.log(resJson);
    setCity("mumbai");
    // setA(resJson.sys.country);
    // setTemp(resJson.main.temp);
    // setCity(resJson.main);
    // return(
    //   <>
    //     <h1>{resJson.main}</h1>
    //   </>
    // );
    // return resJson;
    // }
    // fetchApi();
  }, []);
  // console.log(location.coordinates.lat);
  // console.log(location.coordinates.lng);
  const func = () => {
    const y = new Date();
    setCurr(y);
  }
  setInterval(func, 1000);
  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <>
      <div className="container vh-100 w-75 d-flex align-items-center justify-content-center main">
        <div className="row h-75 w-100">
          <div className="col-md-8 bg-left p-4 d-flex flex-column justify-content-end">
            <h2 className="text-end text-white display-6 fw-normal">Shiv Shakti Nagar</h2>
            <h2 className="text-end text-white display-6 fw-normal">IN</h2>
            <div className="row mt-auto text-white">
              <div className="col-7">
                <h2 className="display-4 fw-normal">10:19</h2>
                <h3 className="fw-normal">Sunday, 7 May 2023</h3>
              </div>
              <div className="col-5">
                <h1 className="display-1 fw-normal">14°c</h1>
              </div>
            </div>
          </div>
          <RightSection/>
        </div>
      </div>
    </>
  );
}
export default App;