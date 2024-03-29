import { useState } from 'react';
import axios from 'axios'
import ImgCard from './ImgCard';
import './Explore.css';

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [imgInfo, setImgInfo] = useState([]);

  function handleSearch(e) {
    e.preventDefault()
    axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=78`, {
      headers: {
        Authorization: 'jOIaUQhMEACWMZCi0W4Ij5Bnk1IdYDqWd87eUv3I0DpIKqQmyJIkvck9',
      },
    })
    .then((response) => {
      setImgInfo(response.data.photos);
      // console.log(response.data.photos);
    });
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
        handleSaveClick(e)
    }
}

  return (
    <>
    <div className="container">
      <div className='image-grid'>
        {imgInfo.map((img) => {
          return <ImgCard photo={img.src.original} />;
        })}
      </div>
    </div>
    <div className="search">
      <form onSubmit={handleSearch}>
        <input className="input"
          type="text"
          onKeyDown={handleKeyDown}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button className="searchBtn">Search</button>

      </form>
    </div>
    </>
  );
}
