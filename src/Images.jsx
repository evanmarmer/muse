import { useState, useEffect } from 'react';
import axios from 'axios'
import SavedImgCard from './SavedImgCard';

export default function Images(){

    const [imgInfo, setImgInfo] = useState([])
    const [searchTag, setSearchTag] = useState('');

// console.log(imgInfo)

    useEffect(() => {
        axios.get('/saved')
            .then((response) => {
                setImgInfo(response.data)
            })
    }, [])

      function filterCallback(e,i,a){
        // console.log(e)
       return e.tag.includes(searchTag) 
      }
      console.log(imgInfo)


    return (
        <>
         <div className="container">
      <div className='image-grid'>
        {imgInfo.filter(filterCallback).map((img) => {
            // console.log(img.tag)
          return <SavedImgCard photo={img.img} tag={img.tag} setImgInfo={setImgInfo}/>;
        })}
      </div>
    </div>
    <div className="search">
      <input className="input2"
        type="text"
        value={searchTag}
        onChange={(e) => setSearchTag(e.target.value)}
        placeholder="Search your tags..."
      />
    </div>
        </>    
    );

}

