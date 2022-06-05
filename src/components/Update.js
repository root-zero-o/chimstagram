import React from 'react'
// import component
import Header from './Header';
import NavBar from './NavBar';
//import style
import { InputWrapper, ImgBox, InputDiv, StyledLabel, ImgInput, TextArea, Button }  from '../pages/input';
import styled from 'styled-components';
//import CSS
import '../App.css';
// import Router
import { Link } from 'react-router-dom';


function Update() {
  return (
      <>
        <Header/>
        <InputWrapper>
            <ImgBox/>
            <InputDiv>
                <h3>이미지 업로드</h3>
                <StyledLabel htmlFor="file">파일 선택</StyledLabel>
                <ImgDeleteBtn>파일 삭제</ImgDeleteBtn>
                <ImgInput 
                    type="file" 
                    id="file" 
                    accept="image/*" 
                    required/>
                <h3>글쓰기</h3>
                <TextArea placeholder='여기에 글을 입력하세요!' required>글</TextArea>
                <div>
                    <Button type="submit">완료!</Button>
                    <Link to={'/'}><Button>취소</Button></Link>
                </div>
            </InputDiv>
        </InputWrapper>
        <NavBar/>
      </>
  )
}

const ImgDeleteBtn = styled.button`
    background-color: black;
    color: white;

    width: 100px;
    height: 27px;

    border-radius: 10px;

    text-align: center;

    margin: 10px 0px;

    font-family: text;
    font-size: 16px;

    &:hover{
        background-color: rgba(0,0,0,0.4);
        color: black;
        border: none;
        cursor: pointer;
    }
`;

export default Update;