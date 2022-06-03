import Header from "../containers/Header";
import NavBar from "../containers/NavBar";
import Card from "../containers/Card";
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
    margin-top: 17vh;
`;

const Blank = styled.div`
    height: 30px;
`;

export default Home;