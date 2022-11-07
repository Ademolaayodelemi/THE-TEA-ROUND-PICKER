import React from 'react';
import { NameList } from './NameList';
import { ErrorHandler } from './ErrorHandler';

// MemberList component maps through all the names
export function MemberList(props) {
    const { names, deleteName } = props
    return (
        <div className="row">
            <div className="col-sm-12">
                <ul>
                    <ErrorHandler names={names} />
                    {names.map((name) => (
                        <NameList
                            key={name.id}
                            //name and deleteName are passed down to the NameList component
                            name={name}
                            deleteName={deleteName} />
                    ))}
                </ul>
            </div>
        </div>
    )
}