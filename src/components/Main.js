import React, { useState } from "react";
import ReactPlayer from "react-player";
// import { Player } from "video-react";
import Modal from "./Modal";

import PulseLoader from "react-spinners/PulseLoader";

const Main = (props) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="main-container">
      <h2
        className={!props.isLoading ? "hide" : null}
        style={{ marginTop: "150px", textAlign: "center" }}
      >
        <PulseLoader color="rgb(199, 199, 199)" />
      </h2>
      <div className={props.isLoading ? "hide" : "main-content"}>
        <Modal
          toggleModal={toggleModal}
          showModal={showModal}
          title={props.title}
          url={props.url}
        />
        {props.mediaType === "video" ? (
          // <Player
          //         className='video'
          //         src={props.url}
          //         onLoad={()=>props.setIsLoading(false)}
          //     />
          <ReactPlayer url={props.url} />
        ) : (
          <img
            className="main-image"
            src={props.url}
            alt={props.title}
            onClick={toggleModal}
            onLoad={() => props.setIsLoading(false)}
          />
        )}
        <span className="under-photo-text">
          Click to play(video) or enlarge(photo).
        </span>
        <p className="explanation">{props.text}</p>
      </div>
    </div>
  );
};

export default Main;
