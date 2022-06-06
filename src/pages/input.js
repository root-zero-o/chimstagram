import React, {useState, useRef} from 'react'
import { useDispatch } from 'react-redux';
//import CSS
import '../App.css';
// import Styled-Components
import styled from 'styled-components';
// import Components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
// import Router
import { Link, useNavigate } from 'react-router-dom';
//import middleware
import { addTextFB } from '../redux/modules/post';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../shared/firebase";

function Input() {

    // 이미지 미리보기 URL
    const [fileImage, setFileImage] = useState("");
    const [fileURL, setFileURL] = useState("");

    const dispatch = useDispatch();

    const saveFileImage = async (event) => {
      // 이미지 미리보기 함수
      setFileImage(window.URL.createObjectURL(event.target.files[0]));
      dispatch(uploadFB(event))
    };

    // 이미지 storage에 업로드
    const uploadFB = (event) => {
      return async function (dispatch){
          const uploaded_file = await uploadBytes(
          ref(storage, `images/${event.target.files[0].name}/`),
          event.target.files[0]
          );
          const file_url = await getDownloadURL(uploaded_file.ref);
          setFileURL(file_url);
      }
  }
    
    // FB에 text 저장  
    const textInput = useRef(null);
    const navigate = useNavigate();

    const onClickBtn = () => {
      const localStorage = window.localStorage;
      const now_user = localStorage.getItem('email');
      const now_nickname = localStorage.getItem('nickname')
      dispatch(addTextFB({text: textInput.current.value, email: now_user, nickname: now_nickname, img_url: fileURL}));
      navigate('/');
      alert("저장 완료!");
    }


  return (
    <>
      <Header/>
        <InputWrapper>
          <ImgBox src={fileImage}></ImgBox>
          <InputDiv>
            <h3>이미지 업로드</h3>
            <StyledLabel htmlFor="file">파일 선택</StyledLabel>
            <ImgInput 
              type="file" 
              id="file" 
              accept="image/*" 
              onChange={saveFileImage}
              required/>
            <h3>글쓰기</h3>
            <TextArea placeholder='여기에 글을 입력하세요!' ref={textInput} required/>
            <div>
              <Button type="submit" onClick={onClickBtn}>완료!</Button>
              <Link to={'/'}><Button>취소</Button></Link>
            </div>
          </InputDiv>
        </InputWrapper>
      <NavBar/>
    </>
  )
}

export const InputWrapper = styled.div`
  margin: 30vh 0px 100px 0px;

  width: 100vw;
  height: 45vh;
  max-height: 450px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImgBox = styled.img`
  width: 65vw;
  max-width: 650px;
  height: 65vw;
  max-height: 650px;

  margin: 0px 10px 0px 30px;

  border: 8px solid black;
  border-radius: 10px;
`;

export const InputDiv = styled.form`

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

export const StyledLabel = styled.label`
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

export const ImgInput = styled.input`
  width: 80%;
  
  display: none;
`;

export const TextArea = styled.textarea`
  width: 80%;
  height: 50%;

  margin: 10px 0px;
  padding: 5px;

  font-family: text;
  font-size: 20px;

  &:placeholder-shown{
    font-family: text;
    font-size: 15px;
    text-align: center;
  }
`;

export const Button = styled.button`
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
