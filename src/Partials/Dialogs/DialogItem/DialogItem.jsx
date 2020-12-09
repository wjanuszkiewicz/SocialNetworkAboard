import Snc from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={Snc.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;