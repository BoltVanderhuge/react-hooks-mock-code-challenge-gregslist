import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings, handleTrashClick}) {
  

  function handleTrashClick(removedListing){
    const updatedListings = listings.filter(listing => listing.id !== removedListing.id)
    setListings(updatedListings)
  }
  const listingArray = listings.map((listing)=> {
    return (
      <ListingCard 
     key={listing.id}
     listing={listing}
     handleTrashClick={handleTrashClick}
     />
   )
  })
  return (
    <main>
      <ul className="cards">
        {listingArray}
      </ul>
    </main>
  );
}

export default ListingsContainer;
