import React from 'react'
import { useSelector } from 'react-redux';
// import Style
import styled from 'styled-components';
import '../App.css';
// import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
// import Router
import { Link } from 'react-router-dom';

// FB에 저장된 게시글 Home에 카드로 표시
 function Card() {

    const textList = useSelector(state => state.post.list);
    console.log(textList)
    const textMap = textList.map((value, index) => (
        <StyledLink to={`/detail/${value.id}`}>
            <Cardbox key={index}>
                <ProfileContainer>
                    <ProfileName>{value.nickname}</ProfileName>
                </ProfileContainer>
                <ImgBox src={value.img_url}></ImgBox>
                <TextBox>{value.text}</TextBox>
                <IconBox>
                    <FontAwesomeIcon icon={ faHeart } size="2x"/>
                    <FontAwesomeIcon icon={ faCommentDots } size="2x"/>
                    <span>좋아요 0개</span>
                </IconBox>
            </Cardbox>
        </StyledLink>
    ))

  return (
    <>
         {textMap}
    </>
  )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Cardbox = styled.div`
    width: 350px;

    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    border-radius: 20px;;

    margin: 10px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover{
        box-shadow: 0px 0px 15px rgba(0,0,0,0.4);
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 300px;
    padding: 20px;

`;

const ImgBox = styled.img`
    width: 350px;
    height: 300px;

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