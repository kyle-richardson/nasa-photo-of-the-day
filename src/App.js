import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"


function App() {

  const baseSiteUrl = `https://api.nasa.gov/planetary/apod?api_key=ch8qGNhqpyF8WKTZBLwjdBMYqhccrttNbPV9nxHH`
  let tempSiteUrl = baseSiteUrl
  const [copyright, setCopyright] = useState('')
  const [date, setDate] = useState('')
  const [explanation, setExplanation] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [mediaType, setMediaType] = useState('')
  const [title, setTitle] = useState('')
  const [isCustom, setIsCustom] = useState(false)

  //test movie 2019-09-08
  useEffect(() => {
    if(isCustom) tempSiteUrl = `${baseSiteUrl}&date=${date}`
    axios.get(tempSiteUrl)
      .then (response => {
        const obj = response.data
        setCopyright(obj.copyright)
        setDate(obj.date)
        setExplanation(obj.explanation)
        !obj.hdurl ? setPhotoUrl(obj.url) : setPhotoUrl(obj.hdurl)
        setMediaType(obj['media_type'])
        setTitle(obj.title)
      })
      .catch (err => console.log(err))
  }, [date])



  return (
    <div className="App">
      <Header 
        title={title} 
        date={date} 
        setDate={setDate}
        isCustom={isCustom}
        setIsCustom={setIsCustom}
      />
      <Main text={explanation} url={photoUrl} mediaType={mediaType}/>
      <Footer copyright={copyright}/>
    </div>
  );
}

export default App;
