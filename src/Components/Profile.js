import React from 'react';
import {CgProfile} from 'react-icons/cg';
import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile">
            <CgProfile className="profile__icon" />
            <h1 className="profile__title">Gabriel Gomes</h1>
        </div>
    );
}

export default Profile;