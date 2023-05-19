import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null); // New state variable

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  const SinglePageView = ({ page, tags, onBack }) => {
	return (
	  <div>
		<h3>{page.title}</h3>
		<p>Author: {page.authorId}</p>
		<p>Content: {page.content}</p>
		<p>Tags: {page.status}</p>
		<p>Date: {page.createdAt}</p>
		<button onClick={onBack}>Back to Wiki List</button>
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
        // Render the single page view
        <SinglePageView page={selectedPage} onBack={() => setSelectedPage(null)} />
      ) : (
        // Render the list of pages
        <>
          <h2>An interesting 📚</h2>
          <PagesList pages={pages} onSelectPage={setSelectedPage} />
        </>
      )}
    </main>
  );
};