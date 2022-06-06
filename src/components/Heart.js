import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import styled-component
import styled from 'styled-components';
// import middleware
import { updateLikeFB, loadLikePostFB } from '../redux/modules/likes';


function Heart({IsLogin, nowLikePost}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadLikePostFB())
    },[dispatch])
    
    const now_nickname = window.localStorage.getItem('nickname');
    const nowList = useSelector(state => state.likes.list);
    const nowIndex = nowList.indexOf(nowLikePost[0]);

    const onLike = () => {
        dispatch(updateLikeFB(nowLikePost, now_nickname, nowIndex))
        alert('좋아요!')
    }


  return (
    <>
        {IsLogin ? <LikeHeart onClick={onLike}>🤍</LikeHeart> : null}
        <Span>좋아요 0개</Span>
    </>
  )
}

const Span = styled.span`
    font-size: 15px;
    margin-left: 10px;
    font-family: text;
    font-weight: ${(props) => props.fontWeight};
`;

const LikeHeart = styled.div`
    cursor: pointer;
`;

export default Heart;
