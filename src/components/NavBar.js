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

    let localStorage = window.localStorage;
    const LocalEmail = localStorage.getItem('email')
    const onLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('nickname');
    }
    return (
        <NavBarWrapper>
            <StyledLink to={'/'}><FontAwesomeIcon icon={ faHouse } size="3x"/></StyledLink>
            <StyledA href="https://www.youtube.com/user/zilioner83"><FontAwesomeIcon icon= { faYoutube } size="4x"/></StyledA>
            <StyledA href="https://www.twitch.tv/zilioner"><FontAwesomeIcon icon= { faTwitch } size="4x"/></StyledA>
            {LocalEmail ? (
                <Link to={'/login'}><Button onClick={onLogout}>Log Out</Button></Link>
            ) : (<Link to={'/login'}><Button>Log In</Button></Link>)}
            
        </NavBarWrapper>
    )
}


const NavBarWrapper = styled.div`
    width: 100vw;
    min-width: 800px;
    height: 10vh;
    min-height: 100px;

    border-top: 1px solid rgba(0,0,0,0.2);

    position: fixed;
    bottom: 0px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: white;

    position: fixed;
    bottom: 0px;

    z-index: 7;
`;

export const ProfilePic = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ddd;
`;

const Button = styled.button`
    background-color: black;
    color: white;
    font-family: title;
    font-size: 25px;

    border-radius: 10px;

    width: 90px;
    height: 45px;

    &:hover {
        background-color: rgba(0,0,0,0.3);
        color: black;
        cursor: pointer;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: black;
`;

const StyledA = styled.a`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: black;
`;

export default NavBar;