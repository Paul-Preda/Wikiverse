//This was coded by Natalia 

import React, { useState } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page';
function Create({ props }) {
  //need a list of pages to add page to and then save
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  //const [email,setEmail] = useState("")
  const [tags, setTags] = useState(''); //remember to split each value by comma ','
  /* const [page, addPage] = useState({})
    let newPage = {};
    newPage = {
                title:"",
                content: "",
                name: "",
                email: "",
                tags:""
              };
    addPage(page => ({
      ...page,
      ...addPage
    })) */
  function handleSubmit(e) {
    e.PreventDefault();
    //loop through every input value and check if any of the fields are empty prior to adding them to list of articles
  }
  function ifFieldsEmpty() {
    if (title !== '' && name !== '' && content !== '' && tags !== '') {
      //separate each tag by comma ????

      //add created date set manually behind scenes to todays date
      //use spread operator to push new article to list of articles
      //reset each to default values (empty strings etc) 
      setTitle('');
      setContent('');
      setName('');
      setTags('');
      return false;
    } else {
      console.error('Please fill in all required fields.');
    }
  }
  return (
    <>
      <main>
        <form>
          <h4> Create A New Article </h4>
          {/*Title*/}
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            aria-label="Title"
          />
          {/*Author*/}
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Author's Name"
            aria-label="Author's Name"
          />
          {/*Content*/}
          <input
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Content"
            aria-label="Content"
          />
          {/*Tags*/}
          <input
            onChange={(e) => setTags(e.target.value)}
            type="text"
            placeholder="Tags"
            aria-label="Tags"
          />
          {/*Create Button*/}
          <button disabled={ifFieldsEmpty === false} type="submit">
            Create
          </button>
        </form>
      </main>
    </>
  );
}
