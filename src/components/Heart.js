import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import styled-component
import styled from 'styled-components';
// import middleware
import { updateLikeFB, loadLikePostFB, deleteLikeFB } from '../redux/modules/likes';


function Heart({IsLogin, nowLikePost}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadLikePostFB())
    },[dispatch])
    
    const now_nickname = window.localStorage.getItem('nickname');
    const nowList = useSelector(state => state.likes.list);
    const nowIndex = nowList.indexOf(nowLikePost[0]);
    const like_list = nowList[nowIndex].like_user
    const nowLikeId = nowList[nowIndex].id
    const nowLikePostId = nowList[nowIndex].like_post

    const onLike = () => {
        if (IsLogin === true && like_list.indexOf(now_nickname) === -1){
           dispatch(updateLikeFB(nowLikePost, now_nickname, nowIndex, now_nickname))
            alert('좋아요!')
            dispatch(loadLikePostFB()); 
        } else if (IsLogin === true && like_list.indexOf(now_nickname) !== -1){
            alert('좋아요 취소');
            dispatch(deleteLikeFB(nowLikeId, nowLikePostId, like_list, now_nickname))
        }
        else {
            alert('로그인이 필요합니다!')
        }
    }    

  return (
    <>
        {like_list.indexOf(now_nickname) === -1 ? 
            <LikeHeart onClick={onLike}>🤍</LikeHeart> 
            : <LikeHeart onClick={onLike}>❤️</LikeHeart>}
        <Span>{like_list[0]}님 외 <strong>{like_list.length}</strong>명이 좋아합니다!</Span>
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