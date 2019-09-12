import React from "react"

const Footer = (props) => {
    return (
        <div className="footer-container">
            <p className="copyright">{props.copyright}</p>
        </div>
    )
}

export default Footer