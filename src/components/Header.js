import React from "react"

const Header = (props) => {
    return (
        <div className="header-container">
            <h1 className="title">{props.title}</h1>
            <div className="button-container">
                <button>Random Date</button>
                <h3 className="date">{props.date}</h3>
                <button>Choose Date</button>
            </div>
            
        </div>
    )
}

export default Header