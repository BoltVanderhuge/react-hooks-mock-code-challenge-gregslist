import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
const url = `http://localhost:6001/listings`

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch(url)
  .then(response => response.json())
  .then(setListings);

  }, [])

  const searchedListing = listings.filter(listing => listing.description.toUpperCase().includes(search.toUpperCase()))
    
  function handleClick(){
    searchedListing.sort(function (a, b) {
      return a.location.localeCompare(b.location);
    });
    setListings(searchedListing)
    }
  
    function addListing(newBoi){
      const updatedListings = [...listings,newBoi]
      setListings(updatedListings)
    }

  return (
    <div className="app">
      <Header aListing={addListing} onSearch={setSearch} handleClick={handleClick} />
      <ListingsContainer  setListings={setListings} listings={searchedListing} />
    </div>
  );
}

export default App;
