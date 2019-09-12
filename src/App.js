import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"


function App() {

  const [copyright, setCopyright] = useState('')
  const [date, setDate] = useState('')
  const [explanation, setExplanation] = useState('')
  const [url, setURL] = useState('')
  const [mediaType, setMediaType] = useState('')
  const [title, setTitle] = useState('')

  //test movie 2019-09-08
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-06`)
      .then (response => {
        const obj = response.data
        console.log(response.data)
        setCopyright(obj.copyright)
        setDate(obj.date)
        setExplanation(obj.explanation)
        !obj.hdurl ? setURL(obj.url) : setURL(obj.hdurl)
        setMediaType(obj['media_type'])
        setTitle(obj.title)
      })
      .catch (err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header title={title} date={date}/>
      <Main text={explanation} url={url} mediaType={mediaType}/>
      <Footer copyright={copyright}/>
    </div>
  );
}

export default App;
