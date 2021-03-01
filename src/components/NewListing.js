import React, {useState} from "react";

function NewListing({aListing}){
    const [form,setForm] = useState({
        description: "",
        image:"",
        location:"",
    })

    function handleNewListing(e){
        e.preventDefault()
        fetch(`http://localhost:6001/listings`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        })
        .then(response => response.json())
        .then(data => {
        aListing(data);
        })

        setForm({
            description: "",
            image:"",
            location:"",
        })

    }

    function handleOnChange(e){
        const name = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [name]: value,
        })
    }

return (
    <form onSubmit={handleNewListing} className="searchbar">
        <input value={form.description} onChange={handleOnChange} name="description" placeholder="description"></input>
        <input value={form.image} onChange={handleOnChange} name="image" placeholder="Image Url Here"></input>
        <input value={form.location} onChange={handleOnChange} name="location" placeholder="Location"></input>
        <button type="submit" >Add New Listing</button>
        </form>
)

}

export default NewListing;