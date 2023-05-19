//This was coded by Natalia

import React from 'react';
//run npm install react-toastify to get the alert boxes
import {toast} from "react-toastify"
// Component for displaying a single page
export function Page(props) {
  const deletePage = async () => {
    try
    {
      const response = await fetch(`/wiki/${props.page.slug}`, {
        method: "DELETE"
      });
      //if status 200 
      if(response.ok)
      {
          //page was successfully deleted , show success toast 
          
          toast.success("Article was successfully deleted")
          //uncomment if toastify fails
          //console.log("Article was successfully deleted")
 
          //update state by deleting the correct article
      } 
      else
      {
          //error handling if deletion fails
          toast.error("Failed to delete the page")
          //uncomment if toastify fails
          //console.log("Failed to delete Article")
      }
    } 
    catch(error)
    {
      console.error("Error occured when attempting to delete the Article", error)
    }
  }
  return (
    <>
      <h3 onClick={props.onClick}>{props.page.title}</h3>
      
      <button onClick={deletePage}>Delete</button>
    </>
  );
}