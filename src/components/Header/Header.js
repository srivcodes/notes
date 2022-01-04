import React from "react";
import { MenuSvg } from "../Helpers/Svg";
import logo from "../../images/logo.png";


export function Header() {

    return (
        <div className="header">
            <div className="menu-icon">
                <MenuSvg />
            </div>
            {selectedLabel === "" ? (
                <div className="home-heading">
                    <img className="logo" src={logo} alt="Logo" />
                    <span className="label-heading">Sticky</span>
                </div>
            ) : (
                <div className="label-heading">{selectedLabel}</div>
            )}
        </div>
    );
}