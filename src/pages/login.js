import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";
// import Firebase
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../shared/firebase';
// import middleware
import { loadNicknameFB } from '../redux/modules/user';

 function Login() {

  let localStorage = window.localStorage;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const onClickLogIn = async () => {
    const user = await signInWithEmailAndPassword(auth, emailInput.current.value, passwordInput.current.value)
    dispatch(loadNicknameFB(user))
    localStorage.setItem('email', emailInput.current.value);
    navigate("/")
  }

  return (
    <LoginWrapper>
      <H1>Chimstagram</H1>
      <LoginBox>
        <H2>Log In</H2>
        <InputDiv>
          <h3>이메일</h3>
          <Input type="text" ref={emailInput}/>
        </InputDiv>
        <InputDiv>
          <h3>패스워드</h3>
          <Input type="password" ref={passwordInput}/>
        </InputDiv>
        <BtnDiv>
          <Button onClick={onClickLogIn}>Log In</Button>
          <Link to={'/'}><Button>뒤로 가기</Button></Link>
        </BtnDiv>
        <Link to={'/signUp'}><span>회원가입하기</span></Link>
      </LoginBox>
    </LoginWrapper>
  )
}

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const H1 = styled.h1`
  font-family: title;
  font-size: 100px;
  margin-bottom: 40px;
`;

export const LoginBox = styled.div`
  width: 50vw;
  min-width: 500px;
  height: 45vh;
  min-height: 400px;

  border: 5px solid rgba(0,0,0);
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H2 = styled.h2`
  font-family: title;
  font-size: 40px;

  margin-bottom: 20px;
`;

export const InputDiv = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  font-family: text;
`;

export const Input = styled.input`
  width: 70%;
  height: 40px;

  margin-bottom: 10px;
  margin-left: 10px;

  border: 3px solid black;
  border-radius: 10px;

`;

export const BtnDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;

  background-color: black;
  color: white;
  font-family: text;
  font-size: 15px;

  border-radius: 10px;

  margin: 10px 10px;

  cursor: pointer;

  &:hover{
    background-color: rgba(0,0,0,0.4);
    color: black;
  }
`;
export default Login;