//This was coded by Paul

import React from 'react';
import { Page } from './Page';

export const PagesList = ({ pages, onSelectPage }) => {
  return (
    <>
      {pages.map((page, idx) => {
        return (
          <Page page={page} key={idx} onClick={() => onSelectPage(page)}
          />
        );
      })}
    </>
  );
};