import { useState } from 'react';
// import axios from axios

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch() {
    axios
      .get(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=50`, {
        headers: {
          Authorization: 'jOIaUQhMEACWMZCi0W4Ij5Bnk1IdYDqWd87eUv3I0DpIKqQmyJIkvck9',
        },
      })
      .then((response) => {
        // const photos = response.data......

        // const cards = photos.map((photo) => (
        //   <ImgCard  />
        // ))
      });
  }

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}
