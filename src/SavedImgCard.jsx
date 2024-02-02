import { useState } from "react";
import './savedImgCard.css';
import axios from 'axios';

export default function savedImgCard(props) {

    const [modalIsShown, setModalIsShown] = useState(false)
    const [newTag, setNewTag] = useState('')

    function onImgClick() {
        setModalIsShown(true);
    }

    function closeModal() {
        setModalIsShown(false);
    }

    async function handleDeleteClick() {
        let response = await axios.delete(`/imgTag?photo=${props.photo}&tag=${props.tag}`)
        setModalIsShown(false);
        props.setImgInfo(response.data)
        // window.location.reload();
    }


    async function handleSaveClick(e) {
        e.preventDefault()
        let maBod = {
            img: props.photo,
            tag: props.tag,
            newTag: newTag
        }

        let response = await axios.put('/tagChange', maBod)

        setModalIsShown(false);
        props.setImgInfo(response.data)
        
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleSaveClick(e)
        }
    }
   

    return (
        <>
            <img onClick={onImgClick} src={props.photo} className="cardImage" />
            { modalIsShown
                ? <>
                    <div className="modal-wrapper">
                        <div className="modal-box">
                            <div className="tag-elements">
                                <span className="tagName">{props.tag}</span>
                                    <input placeholder="Rename tag here..." onKeyDown={handleKeyDown} className="input" type="text" value={newTag} onChange={(e)=>setNewTag(e.target.value)}/>
                                    <button className="searchBtn" onClick={handleSaveClick}>Save</button>
                                <button className="deleteBtn" onClick={handleDeleteClick}>Delete Image</button>
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

