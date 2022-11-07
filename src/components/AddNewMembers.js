import React, { useState } from 'react';
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// AddNewMembers component uses HTML form to add names to the NameList.
export function AddNewMembers(props){
    const { addMember } = props
    const [newMemberName, setNewMemberName] = useState("");

    const handleChange = (e) => {
        setNewMemberName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addMember(newMemberName);
        setNewMemberName("");
    }

    return (
        <div className="row">
            <div className="col-sm-12">
                <form className="app_list_form" onSubmit={handleSubmit}>
                    <input className="app_list_form--input" 
                    type="text" value={newMemberName} 
                    onChange={handleChange} 
                    placeholder="Enter participant name..." autoFocus />
                    <span className="app_list_form--span" onClick={handleSubmit} >
                        <FontAwesomeIcon icon={faLevelDownAlt} rotation={90} />
                    </span>
                </form>
            </div>
        </div>
    )
}