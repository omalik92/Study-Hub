// import React, { useState } from "react";
// import axios from "axios";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const clientId = '0u2qvOtSvRvKQES7weiV4krq83Xoq965X46C4XCA';
//     const clientSecret = 'vpJCMGoXxo4KmwUklq0okPDvo5P1ote7IQB7BFpkX6ExRGfa4x7FyzrYkUJg1yP3eyaaqKeZbgdPJ2CJOdJML2gCKrwaIgG1LpxEeIhHLffThNGufSExzmucBZGm8clC';
//     const authString = `${clientId}:${clientSecret}`;
//     const base64AuthString = btoa(authString);
//     const accessTokenUrl =
//       "https://www.udemy.com/api-2.0/oauth/token/?grant_type=client_credentials";
//     try {
//       const accessTokenResponse = await axios.post(accessTokenUrl, {}, {
//         auth: {
//           username: clientId,
//           password: clientSecret
//         }
//       });
//       const accessToken = accessTokenResponse.data.access_token;
//       const searchUrl = `https://www.udemy.com/api-2.0/courses/?search=${query}`;
//       const searchResponse = await axios.get(searchUrl, {
//         headers: {
//           Authorization: "Basic MHUycXZPdFN2UnZLUUVTN3dlaVY0a3JxODNYb3E5NjVYNDZDNFhDQTp2cEpDTUdvWHhvNEttd1VrbHEwb2tQRHZvNVAxb3RlN0lRQjdCRnBrWDZFeFJHZmE0eDdGeXpyWWtVSmcxeVAzZXlhYXFLZVpiZ2RQSjJDSk9kSk1MMmdDS3J3YUlnRzFMcHhFZUloSExmZlRoTkd1ZlNFeHptdWNCWkdtOGNsQw==",
//         },
//       });
//       setResults(searchResponse.data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

//   return (
//     <div className="search-bar">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search courses"
//           value={query}
//           onChange={(event) => setQuery(event.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {results.length > 0 && (
//         <div className="search-results">
//           <h2>Search Results</h2>
//           <ul>
//             {results.map((result) => (
//               <li key={result.id}>
//                 <a href={result.url}>{result.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const clientId = "0u2qvOtSvRvKQES7weiV4krq83Xoq965X46C4XCA";
const clientSecret = "vpJCMGoXxo4KmwUklq0okPDvo5P1ote7IQB7BFpkX6ExRGfa4x7FyzrYkUJg1yP3eyaaqKeZbgdPJ2CJOdJML2gCKrwaIgG1LpxEeIhHLffThNGufSExzmucBZGm8clC";
const encodedAuth = btoa(`${clientId}:${clientSecret}`);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://www.udemy.com/api-2.0/courses/?search=${query}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${encodedAuth}`,

        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
    });
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for courses"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
