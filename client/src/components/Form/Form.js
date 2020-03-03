import React, {useState} from "react";
import PropType from "prop-types"



  const Form = (
   { SearchInput,
    handleInputChange,
    handleFormSubmit}
  ) => {

  return (
    <form>
      <div className="form-group form-searcch">

          <label className ="search-label" htmlFor="book-search">Search For Any book You Want</label>
          <input
            id="book-search"
            name= "search"
            value = {SearchInput}
            onChange={(event) => handleInputChange(event)}
            type="text"
            className="form-control"
            placeholder="Type in a book name to begin"
            
          />
          <button 
          onClick={handleFormSubmit}
          disabled={!(SearchInput)}
           className="btn btn-success search-btn">
            Search
          </button>
      </div>
    </form>
  );
}

export default Form;