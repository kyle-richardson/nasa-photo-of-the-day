import React from "react"

const Main = (props) => {
    return (
        <div className="main-container">
            <img className="main-image" src={props.url} />
            <p className="explanation">{props.text}</p>
        </div>
    )
}

export default Main