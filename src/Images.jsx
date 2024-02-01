import { useState, useEffect } from 'react';
import axios from 'axios'
import SavedImgCard from './SavedImgCard';

export default function Images(){

    const [imgInfo, setImgInfo] = useState([])
    const [searchTag, setSearchTag] = useState('');

console.log(imgInfo)

    useEffect(() => {
        axios.get('/saved')
            .then((response) => {
                setImgInfo(response.data.map(item => ({ img: item.img, tag: item.tag_name })))
            })
    }, [])

      function handleSearch() {

      }



    return (
        <>
         <div className="container">
      <div className='image-grid'>
        {imgInfo.map((img) => {
            // console.log(img.tag)
          return <SavedImgCard photo={img.img} tag={img.tag}/>;
        })}
      </div>
    </div>
    <div className="search">
      <input className="input"
        type="text"
        value={searchTag}
        onChange={(e) => setSearchTag(e.target.value)}
        placeholder="Search your tags..."
      />
      <button className="searchBtn"onClick={handleSearch}>Search</button>
    </div>
        </>    
    );

}

