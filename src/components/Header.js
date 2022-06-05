import styled from 'styled-components';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css';
// import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
// Router
import { Link } from 'react-router-dom';
// middleware
import { loadUserFB } from '../redux/modules/user';



 function Header() {

    const dispatch = useDispatch();
    let IsLogin = useSelector(state => state.user.is_login)
    const Nickname = useSelector(state => state.user.nickname)
    let localStorage = window.localStorage;
    const LocalEmail = localStorage.getItem('email')
    dispatch(loadUserFB(LocalEmail))
    if(LocalEmail){
        IsLogin = true
    } else {
        IsLogin = false
    }

  return (
    <HeaderWrapper>
        <H1>Chimstagram</H1>
        <IconContainer>
            {IsLogin ? (
                <StyledLink to={`/Input`}><FontAwesomeIcon icon={faSquarePlus} size="2x"/></StyledLink>
            ) : (<FontAwesomeIcon icon={faSquarePlus} size="2x" onClick={()=>(alert("로그인이 필요합니다!"))}/>)}
            <FontAwesomeIcon icon={faBell} size="2x"/>
            <Dot>3</Dot>
            {IsLogin ? (
                <Span>Welcome! {Nickname}</Span>
            ) : (<Span>로그인이 필요합니다.</Span>)}
        </IconContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
    width: 100vw;
    min-width: 800px;
    height: 17vh;
    min-height: 150px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0px 0px 6px rgba(0,0,0,0.2);

    background-color: white;

    position: fixed;
    top: 0px;
`;

const H1 = styled.h1`
    font-family : title;
    font-size: 65px;

    margin-left: 50px;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    height: 100%;

    margin-right: 50px;
    padding: 5px;

    position: relative;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: black;
`;

const Dot = styled.div`

    font-size: 10px;
    color: white;

    background-color: tomato;
    width: 17px;
    height: 17px;
    border-radius: 50%;

    position: absolute;
    right: 0px;
    bottom: 70px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Span = styled.span`
    font-family: text;
    font-size: 15px;
    font-weight: bold;

    position : absolute;
    right: 0px;
    bottom: 30px
`;

export default Header;
