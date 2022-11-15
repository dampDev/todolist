import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue,loading}) {
    
    

    const onSearchValueChange = (event) => {

        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return (
        <div className="TodoSearchMain">
            <input 
            className="TodoSearchInput" placeholder="Ejemplo"
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
            />
        </div>
        
        

    );
    
}

export  {TodoSearch};

