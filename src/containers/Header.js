import styled from 'styled-components';
import React from 'react';
import '../App.css';
// import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";


 function Header() {
  return (
    <HeaderWrapper>
        <H1>Chimstagram</H1>
        <IconContainer>
            <FontAwesomeIcon icon={faSquarePlus} size="2x"/>
            <FontAwesomeIcon icon={faBell} size="2x"/>
            <Dot>3</Dot>
        </IconContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
    width: 100vw;
    min-width: 800px;
    height: 17vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0px 0px 6px rgba(0,0,0,0.2);

    background-color: white;

    position: fixed;
    top: 0px;
`;

const H1 = styled.h1`
    font-family : title;
    font-size: 65px;

    margin-left: 50px;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;

    margin-right: 50px;
    padding: 5px;

    position: relative;
`;

const Dot = styled.div`

    font-size: 10px;
    color: white;

    background-color: tomato;
    width: 17px;
    height: 17px;
    border-radius: 50%;

    position: absolute;
    right: 0px;
    bottom: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Header;
