import React, {Fragment, useState} from "react";
import "./Menu.css";
import Profile from "../Components/Profile";
import {AiOutlineHome, AiOutlineFolderOpen} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {MdOutlineContactPhone} from "react-icons/md"
import {GiHamburgerMenu} from "react-icons/gi"
import {GrClose} from "react-icons/gr"
import {Routes, Route, Link} from "react-router-dom";




const Menu = () => {
    const[menu, setMenu] = useState(false);    
    return(
        
        <div className={menu === false?"menu":"menu-hidden"}>
            {menu === false?<GrClose onClick={() => setMenu(!menu)} className="menu-icon"/>:<GiHamburgerMenu onClick={() => setMenu(!menu)} className="menu-icon"/>}
            
            <Profile menu={menu} />
                <Link className="line-none" to="/PaginaPessoal/build/">
                        <div className="list-items">
                            {menu===false?<><h4 className="menu-items">Início</h4><AiOutlineHome /></>:<AiOutlineHome className="menu-items-icons" />}
                        </div>
                </Link>
                <Link className="line-none" to="/Sobre">
                    <div className="list-items">
                            {menu===false?<><h4 className="menu-items">Sobre</h4><BsInfoCircle /></>:<BsInfoCircle className="menu-items-icons" />}
                        </div>
                </Link>
                <Link className="line-none" to="/Portifolio">
                    <div className="list-items">
                            {menu===false?<><h4 className="menu-items">Portifólio</h4><AiOutlineFolderOpen /></>:<AiOutlineFolderOpen className="menu-items-icons" />}
                        </div>
                </Link>
                <Link className="line-none" to="/Contato">
                    <div className="list-items">
                            {menu===false?<><h4 className="menu-items">Contato</h4><MdOutlineContactPhone /></>:<MdOutlineContactPhone className="menu-items-icons" />}
                        </div>
                </Link>
                
                
            
            
        </div>
        
    )
}

export default Menu;