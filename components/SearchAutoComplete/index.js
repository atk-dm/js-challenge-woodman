import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const AutoCompleteWrapper = styled.section`
  .search__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    
  }
  form {
    display: flex;
    justfy-content: flex-end;
    margin: 0 !important;
  }
  ul {
    padding: 0;
    border: solid 1px grey;
    padding-left: 0.125rem
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: white;
    color: black;
    margin: 0;
  }
  li {
    list-style-type: none;
    font-size: .75rem;

    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    cursor: pointer;
    text-align: left;
  }

  .option__active {
    background-color: yellow
  }

  li:hover {
    font-weight: bold
  }
`;

export const SearchAutoComplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeOption, setActiveOption] = useState(-1);
  const [autoCompleteList, setAutoCompleteList] = useState();

  // what happens when value is entered into search input
  const handleSearchInput = (searchTerm) => {
    setSearchTerm(searchTerm);
    callAutoCompleteAPI();
    if (searchTerm.length > 0) {
      setShowSuggestions(false);
    }
    setShowSuggestions(true);
  };

  //keydown events to specify
  const handleKeyDown = (e) => {
    //up arrow
    if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);
    }
    //down arrow
    if (e.keyCode === 40) {
      if (activeOption >= 4) {
        return;
      }
      setActiveOption(activeOption + 1);
    }

    //escape key
    if (e.keyCode === 27) {
      setShowSuggestions(false);
      setSearchTerm('');
    }
  };

  //define OB API call for search
  async function callAutoCompleteAPI() {
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries/autocomplete?query=${searchTerm}`,
    ).catch((err) => {
      statusCode = 500;
    });
    const data = await response.json();
    setAutoCompleteList(data);
  }

  return (
    <AutoCompleteWrapper>
      <div className="search__container">
        <form action="search">
          <input
            autoComplete="off"
            name="q"
            placeholder="Search breweries"
            type="search"
            onChange={(e) => handleSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            value={searchTerm}
          />
          <button type="submit">Search</button>
        </form>
        {autoCompleteList && showSuggestions ? (
          <ul>
            {autoCompleteList.slice(0, 5).map((result, index) => {
              let className;
              if (index === activeOption) {
                className = 'option__active';
              }
              return (
                <li className={className} key={result.id}>
                  <Link href={`/brewery/${result.id}`}>{result.name}</Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </AutoCompleteWrapper>
  );
};
