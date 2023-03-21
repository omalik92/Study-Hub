import React, { useState } from "react";
import Modal from 'react-modal';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [top, setTop] = useState(7); // Default value of 7 days
  const [articles, setArticles] = useState([]);
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://dev.to/api/articles?tag=${searchTerm}&top=${top}`
    );
    const data = await response.json();

    setArticles(data.slice(0, 9)); 
    setModalIsOpen(true);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Dev Community Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="search-input"
        />
        <div className="search-days">
          <label htmlFor="top" className="search-days-label"> </label>
          <select
            id="top"
            name="top"
            value={top}
            onChange={(event) => setTop(event.target.value)}
            className="search-days-select"
          >
            <option value="30">30 days</option>
            <option value="60">60 days</option>
            <option value="90">90 days</option>
            <option value="180">180 days</option>
          </select>
        </div>
        <button type="submit" className="search-button">Search</button>
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

      <style jsx>{`
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
