import React from 'react';
export function ErrorHandler(props) {
      const { names } = props
    if (names.length !== 0){
        return null
    } 
    // otherwise
    return (
        <li className="text-danger mt-2">Add Members</li>
    )

}