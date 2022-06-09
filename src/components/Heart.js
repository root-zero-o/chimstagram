import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import styled-component
import styled from 'styled-components';
// import middleware
import { updateLikeFB, deleteLikeFB, loadLikePostFB } from '../redux/modules/likes';


function Heart({IsLogin, nowLikeList}) {

    const [nowIndex, setNowIndex] = useState(undefined);
    // const [like_list, set_like_list] = useState(undefined);
    // const [nowLikeId, setNowLikeId] = useState(undefined);
    // const [nowLikePostId, setNowLikePostId] = useState(undefined);

    const dispatch = useDispatch();
    
    const now_nickname = window.localStorage.getItem('nickname');

    const nowList = useSelector(state => state.likes.list)

    useEffect(() => {
        const nowIndex = nowList.indexOf(nowLikeList);
        if(nowIndex){
            return setNowIndex(nowIndex)
        }
    },[nowList, nowIndex, nowLikeList])

    const onLike = () => {
        if (IsLogin === true && nowLikeList?.like_user.indexOf(now_nickname) === -1){
           dispatch(updateLikeFB(nowLikeList, now_nickname, nowIndex))
            alert('좋아요!');
            dispatch(loadLikePostFB())
        } else if (IsLogin === true && nowLikeList?.like_user.indexOf(now_nickname) !== -1){
            alert('좋아요 취소');
            dispatch(deleteLikeFB({id: nowLikeList?.id, like_post: nowLikeList?.like_post, like_user: nowLikeList?.like_user}, now_nickname))
            dispatch(loadLikePostFB())
        }
        else {
            alert('로그인이 필요합니다!')
        }
    }    

  return (
    <>
        {nowLikeList?.like_user.indexOf(now_nickname) === -1 ? 
            <LikeHeart onClick={onLike}>🤍</LikeHeart> 
            : <LikeHeart onClick={onLike}>❤️</LikeHeart>}
        <Span><strong>{nowLikeList?.like_user.length}</strong>명이 좋아합니다!</Span>
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