import React, {useState} from "react"
import ReactPlayer from "react-player"
// import { tsPropertySignature } from "@babel/types"
import Modal from "./Modal"

const Main = (props) => {
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    }
    return (

        <div className="main-container">
            <Modal 
                toggleModal={toggleModal} 
                showModal={showModal}
                title={props.title}
                url={props.url}
            />
            {
                props.mediaType==='video' 
                ? <ReactPlayer 
                    className="video" 
                    url={props.url} 
                /> 
                : <img 
                    className="main-image" 
                    src={props.url} 
                    alt={props.title} 
                    onClick={toggleModal}
                />
            }
            <span className="under-photo-text">Click to play(video) or enlarge(photo).</span>
            <p className="explanation">{props.text}</p>
        </div>
    )
}

export default Main