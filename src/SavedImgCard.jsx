import { useState } from "react";
import './savedImgCard.css';

export default function savedImgCard(props) {

    const [modalIsShown, setModalIsShown] = useState(false)

    function onImgClick() {
        setModalIsShown(true);
    }

    function closeModal() {
        setModalIsShown(false);
    }

    return (
        <>
            <img onClick={onImgClick} src={props.photo} className="cardImage" />
            { modalIsShown
                ? <>
                    <div className="modal-wrapper">
                        <div className="modal-box">
                            <div className="tag-elements">
                                {/* <input placeholder="Rename tag here..." className="input" type="text" value={tagName} onChange={tName}/>
                                <button className="searchBtn" onClick={handleSaveClick}>Save</button> */}
                            </div>
                            <img className='img-expand' src={props.photo}/>
                            <button className="buttonX" onClick={closeModal}>x</button>
                        </div>
                    </div>
                </>
                : null
            }
        </>    
    );
};

