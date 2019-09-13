import React from "react"
import styled from "styled-components"

const Modal = (props) => {

    const ModalContainer = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        ${() => props.showModal ? `display: block` : `display: none`}
    `
    const ModalBody = styled.section`
        position: fixed;
        width: 85%;
        height: auto;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    `
    const ModalPic = styled.img`
        max-width: 100%;
        height: auto;
        max-height: 95vh;
        cursor: pointer;
        border-radius: 8px;
    `
    const ModalClose = styled.span`
        position: absolute;
        top: 1%;
        right: 3%;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        opacity: .5;
        cursor: pointer;
    `

    return (
        <ModalContainer onClick={props.toggleModal}>
            <ModalClose onClick={props.toggleModal}>&times;</ModalClose>
            <ModalBody>
                <ModalPic
                    className="modal-image" 
                    src={props.url} 
                    alt={props.title} 
                    onClick={props.toggleModal}
                />
            </ModalBody>
        </ModalContainer>
    )
}

export default Modal