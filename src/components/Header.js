import React from "react"

const Header = (props) => {
    return (
        <div className="header-container">
            <h1 className="title">{props.title}</h1>
            <h3 className="date">{props.date}</h3>
        </div>
    )
}

export default Header