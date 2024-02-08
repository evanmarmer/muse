import { useState } from "react";
import './ImgCard.css';
import axios from 'axios';

function ImgCard(props) {

    const [tagName, setTagName] = useState('');
    const [modalIsShown, setModalIsShown] = useState(false)
    const username = localStorage.getItem('username')

    function tName(e){
        e.preventDefault();
        setTagName(e.target.value);
    }

    function handleSaveClick(e){
        e.preventDefault();
        
        const newCard = {
            tagName: tagName,
            imageSrc: props.photo, 
            username: username
        };
        
        axios.post('/save', newCard)
        .then((response) => {
            setModalIsShown(false);
        })
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
