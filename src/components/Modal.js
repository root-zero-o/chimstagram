import React from 'react'
// import Style
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Modal({ open, close, id, nickname, text, img_url }) {
   
  return (
      <>
        {open ? (
            <>
            <ModalBackground onClick={close}/>
            <ModalBox>
                <TextBox width="60%">
                    <Img src={img_url}></Img>
                </TextBox>
                <TextBox width="40%">
                    <TextDiv height="10%" fontWeight="bold">작성자 : {nickname}</TextDiv>
                    <TextDiv height="30%">{text}</TextDiv>
                    <TextDiv height="10%">
                        <FontAwesomeIcon icon={ faHeart } size="x"/>
                        <Span>좋아요 0개</Span>
                    </TextDiv>
                    <CommentContainer>
                        <InputForm>
                            <Input type="text" placeholder='댓글 달기' required/>
                            <Button>저장</Button>
                        </InputForm>
                        <CommentBox>
                            <Comment>
                                <Span fontWeight="bold">주펄</Span>
                                <Span>M-I-C-K-E-Y-M-O-U-S-E</Span>
                            </Comment>
                        </CommentBox>
                    </CommentContainer>
                </TextBox>
            </ModalBox>
            </>
        ) : null }
      </>
      
    
  )
}

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0,0,0,0.4);
    z-index: 10;
    &:hover{
        cursor: pointer;
    }
`;

const ModalBox = styled.div`
    background-color: white;

    width: 700px;
    height: 50vh;
    min-height: 450px;

    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 20;

    position: fixed;
`;

const TextBox = styled.div`
    width: ${(props) => props.width};
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

`;

const TextDiv = styled.div`
    width: 100%;
    height: ${(props) => props.height};

    font-family: text;
    font-size:20px;
    font-weight: ${(props) => props.fontWeight};
    text-align: center;

    margin: 20px 0px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;

    border: none;
    border-radius: 10px;
`;

const CommentContainer = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    flex-direction: column;
`;

const InputForm = styled.form`
    width: 90%;

    display: flex;
    align-items: center;

`;

const Input = styled.input`
    width: 200px;
    height: 30px;

    padding: 5px;

    font-family: text;

    margin-left: 20px;
`;

const Button = styled.button`
    width: 60px;
    height: 100%;

    background-color: black;
    color: white;

    font-family: text;

    &:hover{
        background-color: rgba(0,0,0,0.4);
        color: black;
        border: none;
        cursor: pointer;
    }
`;

const CommentBox = styled.div`
    width: 100%;
    height: 80%;

    overflow-y: auto;
`;


const Span = styled.span`
    font-size: 15px;
    margin-left: 10px;
    font-family: text;
    font-weight: ${(props) => props.fontWeight};
`;

const Comment = styled.div`
    display: flex;
    flex-direction: column;

    height: 50px;
    width: 90%;

    padding: 10px;
`;



export default Modal;
