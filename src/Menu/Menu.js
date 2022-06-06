import React from "react";
import "./Menu.css";
import Profile from "../Components/Profile";
import {AiOutlineHome, AiOutlineFolderOpen} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {MdOutlineContactPhone} from "react-icons/md"


const Menu = () => {
    return(
        <div className="menu">
            <Profile />
            <div className="menu-list">
                <div className="list-items">
                    <h4>Início</h4><AiOutlineHome /> 
                </div>
                <div className="list-items">
                    <h4>Sobre</h4><BsInfoCircle />
                </div>
                <div className="list-items">
                    <h4>Portifólio</h4><AiOutlineFolderOpen />
                </div>
                <div className="list-items">
                    <h4>Contato</h4><MdOutlineContactPhone />
                </div>  
            </div>
        </div>
    )
}

export default Menu;