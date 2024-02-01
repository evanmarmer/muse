import { useState } from "react";
import './ImgCard.css';

function ImgCard(props) {

    const [tagName, setTagName] = useState('');
    const [modalIsShown, setModalIsShown] = useState(false)

    function tName(e){
        e.preventDefault();
        setTagName(e.target.value);
    }

    function handleSaveClick(){
        
        const newCard = {
            tagName: tagName,
            imageSrc: props.photo 
        };
        
        Image.addCard(newCard);
    }

    function onImgClick() {
        console.log('working')
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
                                <input placeholder="Name tag here..." className="input" type="text" value={tagName} onChange={tName}/>
                                {/* <label htmlFor="tag">Tag Name</label> */}
                                <button className="searchBtn" onClick={handleSaveClick}>Save</button>
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

export default ImgCard;
