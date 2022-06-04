import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import styled from 'styled-components';

function Home() {

    
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
`;

const Blank = styled.div`
    height: 30px;
`;

export default Home;