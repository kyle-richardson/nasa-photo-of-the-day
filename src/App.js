import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import moment from "moment"

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const today = new Date()
  const today_formatted = moment(today).format("YYYY-MM-DD")
  const [copyright, setCopyright] = useState("");
  const [date, setDate] = useState(today_formatted);
  const [explanation, setExplanation] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [title, setTitle] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const baseSiteUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`;

  //test movie 2019-09-08
  useEffect(() => {
    let tempSiteUrl = baseSiteUrl;
    if (isCustom) tempSiteUrl = `${baseSiteUrl}&date=${date}`;
    axios
      .get(tempSiteUrl)
      .then((response) => {
        setIsLoading(true);
        setPhotoUrl("");
        return response;
      })
      .then((response) => {
        const obj = response.data;
        setCopyright(obj.copyright);
        setDate(obj.date);
        setExplanation(obj.explanation);
        !obj.hdurl ? setPhotoUrl(obj.url) : setPhotoUrl(obj.hdurl);
        setMediaType(obj["media_type"]);
        setTitle(obj.title);
        return;
      })
      .catch((err) => {
        console.trace(err);
        alert("Invalid date. Please try again.");
      });
    // eslint-disable-next-line
  }, [date, baseSiteUrl]);

  if (!photoUrl)
    return (
      <h2 style={{ marginTop: "150px", textAlign: "center" }}>
        <PulseLoader color="rgb(199, 199, 199)" />
      </h2>
    );
  return (
    <div className="App">
      <Header
        title={title}
        date={date}
        setDate={setDate}
        isCustom={isCustom}
        setIsCustom={setIsCustom}
      />
      <Main
        text={explanation}
        url={photoUrl}
        mediaType={mediaType}
        title={title}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      <Footer copyright={copyright} isLoading={isLoading} />
    </div>
  );
}

export default App;
