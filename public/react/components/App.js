//This was coded by Paul, it is very broken and does not work

import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  const SinglePageView = ({ page, goBack }) => {
    return (
      <div>
        <h3>{page.title}</h3>
        <h3>Author: {page.authorId.name}</h3>
        <h3>Tags: {page.id.name}</h3>
        <h3>Date created: {page.createdAt}</h3>
        <p>Content: {page.content}</p>
        <button onClick={goBack}>Back to Wiki List</button>
      </div>
    );
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      {selectedPage ? (
        <SinglePageView page={selectedPage} goBack={() => setSelectedPage(null)} />
      ) : (
        <>
          <h2>An interesting 📚</h2>
          <PagesList pages={pages} onSelectPage={setSelectedPage} />
        </>
      )}
    </main>
  );
};
