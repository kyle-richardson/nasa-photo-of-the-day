import React from "react"

const Main = (props) => {
    if(!props.url) return <h2>Loading...</h2>
    return (
        <div className="main-container">
            <img className="main-image" src={props.url} />
            <p className="explanation">{props.text}</p>
        </div>
    )
}

export default Main