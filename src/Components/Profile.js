import React from 'react';
import {CgProfile} from 'react-icons/cg';
import "./Profile.css";

const Profile = (props) => {
    return (
        <div className="profile">
            <CgProfile className="profile__icon" />
            {props.menu === false?<h1 className="profile__title">Gabriel Gomes</h1>:"" }
        </div>
    );
}

export default Profile;