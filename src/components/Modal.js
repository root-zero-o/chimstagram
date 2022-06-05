import React from 'react'
// import Style
import styled from 'styled-components';

function Modal(props) {

    const { open, close, id } = props;
  return (
      <>
        {open ? (
            <>
            <ModalBackground onClick={close}/>
            <ModalBox>
                <TextBox>
                    <TextDiv height="10%">닉네임</TextDiv>
                    <TextDiv height="60%">이미지</TextDiv>
                    <TextDiv height="30%">텍스트</TextDiv>
                </TextBox>
                <TextBox>
                    <TextDiv height="10%">아이콘</TextDiv>
                    <CommentContainer>
                        <InputForm>
                            <Input type="text" placeholder='댓글 달기' required/>
                            <Button>댓글 남기기</Button>
                        </InputForm>
                        <CommentBox>
                            <Comment>
                                <div>닉네임</div>
                                <div>댓글내용</div>
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

    width: 80vw;
    height: 60vh;

    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 20;

    position: fixed;
`;

const TextBox = styled.div`
    width: 45%;
    height: 85%;
`;

const TextDiv = styled.div`
    width: 100%;
    height: ${(props) => props.height};

    border: 1px solid tomato;
`;

const CommentContainer = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    flex-direction: column;
`;

const InputForm = styled.form`
    width: 100%;

`;

const Input = styled.input`
    width: 70%;
    height: 40px;

    padding: 5px;

    font-family: text;
`;

const Button = styled.button`
    width: 26%;
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
`;

const Comment = styled.div`
    display: flex;
    flex-direction: column;

    height: 15%;
    width: 100%;
`;

export default Modal;
