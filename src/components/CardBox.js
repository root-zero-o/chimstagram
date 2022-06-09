import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Modal from './Modal';

 function CardBox({ id, nickname, text, img_url, index}) {

    const [nowLikeList, setNowLikeList] = useState(undefined);
    const [nowLikeNum, setNowLikeNum] = useState(undefined);            // 변하는 값은 state에 널어서 관리하기

    // 모달창 열고 닫기
    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const likeList = useSelector(state => state.likes.list)
    useEffect(() => {                                                      // useEffect로 state값이 변경될 때 마다 실행되게 해주어야 함!
        const nowLikeList = likeList.find(value => value.like_post === id) // 애초에 데이터를 여기서 가공하지 않는게 좋다!;ㅅ; 컴포넌트에서는 가공된 데이터를 받아 표시만 해줄 것
        if(nowLikeList){
            setNowLikeList(nowLikeList)
            setNowLikeNum(nowLikeList.like_user)                    // if문을 사용해서 데이터가 있을때만 setState가 실행되게 하자 !!
        }
    },[id, likeList, nowLikeNum])                                          // 사용되는 값들이 변할때만 실행되게 하자 !! (변수 이름이 어렵다 ..;ㅅ;)
                                                                            // state값은 !! 항상 !! 초기값을 먼저 표시한 뒤 값을 받기 때문에, 데이터가 있을때만 실행해서 오류를 없애자!                                                                          
  return (
    <>
        <Modal 
            open={modalOpen} 
            close={closeModal} 
            id={id} 
            nickname={nickname} 
            text={text} 
            img_url={img_url} 
            index={index}
            nowLikeList={nowLikeList}/>
        <CardDiv onClick={openModal}>
                <ProfileContainer>
                    <ProfileName>{nickname}</ProfileName>
                </ProfileContainer>
                <ImgBox src={img_url}></ImgBox>
                <TextBox>{text}</TextBox>
                <Span>❣️ 좋아요 {nowLikeNum?.length}개 </Span>   {/* 옵셔널 체이닝으로 한 번 더 값이 있는지 검사하기  */}  

        </CardDiv>
    </>
    
  )
} 

const CardDiv = styled.div`
    width: 350px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    border-radius: 20px;
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

const ProfileName = styled.span`
    font-size: 25px;
    margin-left: 20px;
    font-family: text;
    font-weight: bold;
`;

const Span = styled.span`
    font-family: text;
    font-size: 15px;
    margin: 20px;
`;

export default CardBox;