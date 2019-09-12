import React from "react"
import ReactPlayer from "react-player"
// import { tsPropertySignature } from "@babel/types"

const Main = (props) => {
    if(!props.url) return <h2>Loading...</h2>
    return (
        <div className="main-container">
            {
                props.mediaType==='video' 
                ? <ReactPlayer className="video" url={props.url} /> 
                : <img className="main-image" src={props.url} alt={props.title} />
            }
            <p className="explanation">{props.text}</p>
        </div>
    )
}

export default Main