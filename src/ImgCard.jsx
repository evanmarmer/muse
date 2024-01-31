import { useState } from "react";

function ImgCard() {

    const [tagName, setTagName] = useState('');

    function tName(e){
        e.preventDefault();
        setTagName(e.target.value);
    }

    function handleSaveClick(){
        
        const newCard = {
            tagName: tagName,
            imageSrc: '' // ...props.something??
        };

        Image.addCard(newCard);
    }

    return (
        <div className="card">
            {/* ...props.something? */}
            <img src='' className="cardImage" />
            <input type="text" value={tagName} onChange={tName}/>
            <label htmlFor="tag">Tag Name</label>
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
};

export default ImgCard;
