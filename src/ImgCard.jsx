import { useState } from "react";
import './ImgCard.css';

function ImgCard(props) {

    const [tagName, setTagName] = useState('');

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

    return (
        <img src={props.photo} className="cardImage" />
                    // {/* <input type="text" value={tagName} onChange={tName}/>
                    // <label htmlFor="tag">Tag Name</label>
                    // <button onClick={handleSaveClick}>Save</button> */}
               
    );
};

export default ImgCard;
