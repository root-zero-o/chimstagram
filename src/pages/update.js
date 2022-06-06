import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import component
import Header from '../components/Header';
import NavBar from '../components/NavBar';
//import style
import { InputWrapper, ImgBox, InputDiv, StyledLabel, ImgInput, TextArea, Button }  from './input';
import styled from 'styled-components';
//import CSS
import '../App.css';
// import Router
import { Link, useParams, useNavigate } from 'react-router-dom';
// import middleware
import { deleteFileFB, updatePostFB  } from '../redux/modules/post';

function Update() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myIndex = useParams().update;
    const myText = useSelector(state => state.post.list[myIndex].text)
    const myImg = useSelector(state => state.post.list[myIndex].img_url)
    const myId = useSelector(state => state.post.list[myIndex].id)
    const myEmail = useSelector(state => state.post.list[myIndex].email)
    const myNickname = useSelector(state => state.post.list[myIndex].nickname)

    const textRef = useRef(null);

    const onUpdate = () => {
        dispatch(updatePostFB( {id: myId, email : myEmail, img_url : myImg, nickname: myNickname, text: textRef.current.value}, myIndex ));
        alert('수정민수야 고맙다🙏')
        navigate('/')
    }

  return (
      <>
        <Header/>
        <InputWrapper>
            <ImgBox src={myImg}/>
            <InputDiv>
                <h3>글 수정하기</h3>
                <TextArea defaultValue={myText} ref={textRef} required></TextArea>
                <div>
                    <Button type="submit" onClick={onUpdate}>완료!</Button>
                    <Link to={'/'}><Button>취소</Button></Link>
                </div>
            </InputDiv>
        </InputWrapper>
        <NavBar/>
      </>
  )
}
export default Update;