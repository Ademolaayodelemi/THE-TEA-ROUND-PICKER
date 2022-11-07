import React from 'react';
import coffeeCup2 from '../images/coffeeCup';
import './Header.scss';

export function Header(){
    return (
        <header className="app_header">
            <div className="row">
                <div className="col-sm-12 app_header_images">
                    <img className="app_header_images--image" src={coffeeCup2} alt="coffee cup" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 className="app_header_title">THE TEA ROUND PICKER</h1>
                </div>
            </div>
        </header>
    )
}
