import React from "react";
import Search from "./Search";
import NewListing from "./NewListing";

function Header({onSearch, handleSubmit, handleClick, aListing}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} handleSubmit={handleSubmit} />
      <button onClick={handleClick} type="button">Sort Alphbetically by Location</button>
      <NewListing aListing={aListing}/>
    </header>
  );
}

export default Header;
