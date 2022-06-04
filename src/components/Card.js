import React from 'react'
import styled from 'styled-components';
import { ProfilePic } from './NavBar';
import '../App.css';
// import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

 function Card() {
  return (
    <Cardbox>
        <ProfileContainer>
            <ProfilePic></ProfilePic>
            <ProfileName>rootzero3o</ProfileName>
        </ProfileContainer>
        <ImgBox></ImgBox>
        <TextBox>침착맨 너무 웃기다</TextBox>
        <IconBox>
            <FontAwesomeIcon icon={ faHeart } size="2x"/>
            <FontAwesomeIcon icon={ faCommentDots } size="2x"/>
            <span>좋아요 0개</span>
        </IconBox>
    </Cardbox>
  )
}

const Cardbox = styled.div`
    width: 350px;

    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    border-radius: 20px;;

    margin: 0px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 300px;
    padding: 20px;

`;

const ImgBox = styled.div`
    width: 350px;
    height: 300px;
    background-color: #ddd;

    margin-bottom: 10px;
`;

const TextBox = styled.span`
    margin-left: 20px;
    margin-bottom: 10px;

    font-size: 20px;
    font-family: text;
`;
const IconBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 190px;
    margin-bottom: 10px;
`;

const ProfileName = styled.span`
    font-size: 25px;

    margin-left: 20px;

    font-family: text;
    font-weight: bold;
`;
export default Card;