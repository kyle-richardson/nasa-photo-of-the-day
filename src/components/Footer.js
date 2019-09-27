import React from "react"

const Footer = (props) => {
    return (
        <div className={props.isLoading ? 'hide': 'footer-container'}>
            <p className="copyright">NASA Photo of the Day &copy; {!props.copyright ? 'NASA' : props.copyright}</p>
        </div>
    )
}

export default Footer