import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { H1, LoginWrapper, LoginBox, H2, InputDiv, Input, BtnDiv, Button } from './login';
// Router
import { Link, useNavigate } from 'react-router-dom';
// Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../shared/firebase';
// 
import { addFB } from '../redux/modules/post';

function SignUp() {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const emailInput = useRef(null);
  const pwInput = useRef(null);
  const nicknameInput = useRef(null);

  const onClick = async ()  => {
    const user = await createUserWithEmailAndPassword(auth, emailInput.current.value, pwInput.current.value);
    console.log(user)
    dispatch(addFB({email : user.user.email, nickname: nicknameInput.current.value}))
    navigate("/")
  }

  return (
    <LoginWrapper>
        <H1>Chimstagram</H1>
        <LoginBox>
            <H2>Sign Up</H2>
            <InputDiv>
              <h3>이메일</h3>
              <Input type="email" ref={emailInput}/>
            </InputDiv>
            <InputDiv>
              <h3>닉네임</h3>
              <Input type="text" ref={nicknameInput}/>
            </InputDiv>
            <InputDiv>
              <h3>비밀번호</h3>
              <Input type="password" ref={pwInput}/>
            </InputDiv>
            <InputDiv>
              <h3>비밀번호확인</h3>
              <Input type="password"/>
            </InputDiv>
            <BtnDiv>
              <Button onClick={onClick}>가입하기</Button>
              <Link to={'/login'}><Button>취소</Button></Link>
            </BtnDiv>
        </LoginBox>
        
    </LoginWrapper>
  )
}

export default SignUp;