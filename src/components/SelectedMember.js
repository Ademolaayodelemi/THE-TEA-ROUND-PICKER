import React from 'react';

export function SelectedMember(props){
    const {pickedName} = props
    return (
        <div className="app_randomgroup_result">
            <p className="app_randomgroup_result--name">{pickedName}</p>
            <p style={{textAlign: 'center', fontSize: '25px'}}>Will be making the tea for this round! </p>
        </div>
    )
}
