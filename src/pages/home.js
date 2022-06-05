import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import styled from 'styled-components';

// import middleware
import { loadTextFB } from '../redux/modules/post';
import { loadAllUserFB } from '../redux/modules/user';

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllUserFB());
        dispatch(loadTextFB());
    },[dispatch]);

    return (
        <>
            <Header/>
            <Blank/>
            <CardWrapper>
                <Card/>
            </CardWrapper>
            <NavBar/>
        </>
    )
}


const CardWrapper = styled.div`
    margin-top: 150px;
    margin-bottom: 120px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const Blank = styled.div`
    height: 30px;
`;

export default Home;