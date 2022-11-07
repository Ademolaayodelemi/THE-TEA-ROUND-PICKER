import React from 'react';

export const NameList = (props) => {
    const { name, deleteName } = props
    return (
        <li className="app_list_item">
            <span className="app_list_item--name">{name.memberName}</span>
            {/* <span className="app_list_item--name">{name.id}</span> */}
            <span className="app_list_item--remove" onClick={() => deleteName(name.id)}>&times;</span>
        </li>
    )
}
