import React from 'react';
import { SelectedMember } from './SelectedMember';

// PickerButton component consists of a button and a paragraph tag to display the SelectedMember name.
export function PickerButton (props) {
    const { pickName, pickedName } = props

    return (
        <div className="row">
            <div className="col-sm-12 app_randomgroup">
                {pickedName !== "" &&
                    <SelectedMember pickedName={pickedName} />
                }
                <input className="app_randomgroup--button" 
                type="button" value="Pick Tea Maker" 
                onClick={() => pickName()} />
            </div>
        </div>
    )
}
