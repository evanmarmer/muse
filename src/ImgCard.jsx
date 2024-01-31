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

    console.log('modal is shown:', modalIsShown);

    return (
        <>
            <img onClick={onImgClick} src={props.photo} className="cardImage" />
            { modalIsShown
                ? <>
                    <div className="modal-wrapper">
                        <div className="modal-box">
                            <input type="text" value={tagName} onChange={tName}/>
                            <label htmlFor="tag">Tag Name</label>
                            <button onClick={handleSaveClick}>Save</button>
                            <img className='img' src={props.photo}/>
                            
                        </div>
                        <div className="modal-background" ></div>
                    </div>
                </>
                : null
            }
        </>    
    );
};

export default ImgCard;
