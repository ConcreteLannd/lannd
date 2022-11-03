import React, {useState} from 'react';
import './sort.css'

function Sort() {
    // const {isActive, setIsActive} = useState(false);
    const [navClass, setnavClass]= useState("dropdown w30");
    const [toggledNav, settoggledNav]= useState(true);

    const addClass=() => {
        if (toggledNav){
            setnavClass("dropdown w30 show");
            settoggledNav(false);
        }else {
            setnavClass("dropdown");
            settoggledNav(true);
        }

    }

    return(
        <div className={navClass} >
            <button className="btn btn-default btn-sort dropdown-toggle" onClick={addClass} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Sort by <span className="caret" />
            </button>
            <ul className="dropdown-menu">
                <li><a role="button">Name ASC</a></li>
                <li><a role="button">Name DESC</a></li>
                <li><a role="button">Level ASC</a></li>
                <li><a role="button">Level DESC</a></li>
            </ul>
            <span className="label label-success label-medium">NAME - DESC</span>
        </div>
    )
}

export default Sort;
