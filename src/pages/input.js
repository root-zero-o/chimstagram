import React, {useState} from 'react'
//import CSS
import '../App.css';
// import Styled-Components
import styled from 'styled-components';
// import Components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
// import Router
import { Link } from 'react-router-dom';


function Input() {

    const [fileImage, setFileImage] = useState("");

    const saveFileImage = (event) => {
      setFileImage(URL.createObjectURL(event.target.files[0]));
    };

  return (
    <>
      <Header/>
        <InputWrapper>
          <div>
            <ImgBox src={fileImage}></ImgBox>
          </div>
          <InputDiv>
            <h3>이미지 업로드</h3>
            <StyledLabel htmlFor="file">파일 선택</StyledLabel>
            <ImgInput type="file" id="file" accept="image/*" onChange={saveFileImage}/>
            <h3>글쓰기</h3>
            <TextArea placeholder='여기에 글을 입력하세요!'/>
            <div>
              <Button>완료!</Button>
              <Link to={'/'}><Button>취소</Button></Link>
            </div>
          </InputDiv>
        </InputWrapper>
      <NavBar/>
    </>
  )
}

const InputWrapper = styled.div`
  margin: 180px 0px 100px 0px;

  width: 100vw;
  height: 70vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImgBox = styled.img`
  width: 65vw;
  max-width: 650px;
  height: 65vw;
  max-height: 650px;

  margin: 0px 10px 0px 30px;

  border: 8px solid black;
  border-radius: 10px;
`;

const InputDiv = styled.div`

  width: 30vw;
  min-width: 200px;
  height: 60vh;
  min-height: 300px;
  max-height: 600px;

  margin-right: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: text;
`;

const StyledLabel = styled.label`
  background-color: black;
  color: white;

  width: 100px;
  height: 27px;

  border-radius: 10px;

  text-align: center;

  margin: 10px 0px;

  &:hover {
    background-color: rgba(0,0,0,0.3);
    color: black;
    cursor: pointer;
  }
`;

const ImgInput = styled.input`
  width: 80%;
  
  display: none;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 50%;

  margin: 10px 0px;
  padding: 5px;

  font-family: text;

  &:placeholder-shown{
    font-family: text;
    font-size: 15px;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 40px;

  background-color: black;
  color: white;

  font-family: text;
  font-size: 15px;

  border-radius: 15px;

  margin: 0px 5px;

  &:hover{
    background-color: rgba(0,0,0,0.3);
    border: none;
    color: black;
    cursor: pointer;
  }
`;

export default Input;
