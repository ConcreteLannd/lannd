import './search.css'
import React, {Component} from 'react';

function Search() {
    
    return(
        <div className="input-group w30">
            <input type="text" className="form-control" placeholder="Search item name" />
            <span className="input-group-btn">
                <button className="btn btn-info" type="button">Clear</button>
            </span>
        </div>
    )
}

export default Search;
