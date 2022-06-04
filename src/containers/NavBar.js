import styled from 'styled-components';
import React from 'react';
import '../App.css';
//import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
// Router
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <NavBarWrapper>
            <FontAwesomeIcon icon={ faHouse } size="3x"/>
            <FontAwesomeIcon icon= { faYoutube } size="4x"/>
            <FontAwesomeIcon icon= { faTwitch } size="4x"/>
            <Link to={'/login'}>
                <ProfilePic></ProfilePic>
            </Link>
        </NavBarWrapper>
    )
}


const NavBarWrapper = styled.div`
    width: 100vw;
    min-width: 800px;
    height: 10vh;

    border-top: 1px solid rgba(0,0,0,0.2);

    position: fixed;
    bottom: 0px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: white;

    position: fixed;
    bottom: 0px;
`;

export const ProfilePic = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ddd;
`;
export default NavBar;