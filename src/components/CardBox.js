import React, {useState} from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import Modal from './Modal';

 function CardBox({ id, nickname, text, img_url, index}) {

    // 모달창 열고 닫기
    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
  
  return (
    <>
        <Modal open={modalOpen} close={closeModal} id={id} nickname={nickname} text={text} img_url={img_url} index={index} />
        <CardDiv onClick={openModal}>
                    <ProfileContainer>
                        <ProfileName>{nickname}</ProfileName>
                    </ProfileContainer>
                    <ImgBox src={img_url}></ImgBox>
                    <TextBox>{text}</TextBox>
                    <IconBox>
                        <span>좋아요 0개 / 댓글 0개</span>
                    </IconBox>
        </CardDiv>
    </>
    
  )
}

const CardDiv = styled.div`
    width: 350px;

    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    border-radius: 20px;;

    margin: 10px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover{
        box-shadow: 0px 0px 15px rgba(0,0,0,0.4);
        cursor: pointer;
    }
    z-index: 5;
    background-color: transparent;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 300px;
    padding: 20px;

    z-index: 3;

`;

const ImgBox = styled.img`
    width: 350px;
    height: 300px;

    margin-bottom: 10px;

    z-index: 3;
`;

const TextBox = styled.span`
    margin-left: 20px;
    margin-bottom: 10px;

    font-size: 20px;
    font-family: text;
    z-index: 3;
`;
const IconBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 190px;
    margin-bottom: 10px;
    z-index: 3;

    font-family: text;
    font-size: 15px;
`;

const ProfileName = styled.span`
    font-size: 25px;

    margin-left: 20px;

    font-family: text;
    font-weight: bold;
`;

export default CardBox;
