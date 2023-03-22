import React, { useState } from "react";
import Modal from 'react-modal';
import './searchbar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://dev.to/api/articles?tag=${searchTerm}`
    );
    const data = await response.json();

    setArticles(data.slice(0, 9));
    setModalIsOpen(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Dev Community Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        {/* <button type="submit" className="button button--flex" style={{padding:15}}>Search</button> */}
      </form>

      <Modal isOpen={modalIsOpen}>
        <div className="modal-content">
          <div className="card-container">
            {articles.map((article) => (
              <div className="card" key={article.id}>
                <a href={article.url}>
                  <h2>{article.title}</h2>
                </a>
                <p>{article.description}</p>
                <p>By {article.user.name}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>

      <style >{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
        }
        .card {
          margin: 10px;
          padding: 10px;
          width: 300px;
          background-color: #f0f0f0;
        }
        .card a {
          text-decoration: none;
        }
        .card h2 {
          margin: 0;
          font-size: 24px;
        }
        .card p {
          margin: 0;
          font-size: 16px;
        }

        .modal-content {
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

export default SearchBar;
