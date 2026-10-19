import {Route, Routes} from "react-router-dom";
import Nav from "./Nav.tsx";
import Home from "./main/Home.tsx";
import Documents from "./main/Documents.tsx";
import Education from "./main/Education.tsx";
import Experiences from "./main/Experiences.tsx";
import Projects from "./main/Projects.tsx";
import Leadership from "./main/Leadership.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import styled from "styled-components";


/* wraps around nav and main */
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    min-height: 100vh;
    margin: auto;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        width: 90vw;
    }
`;

const StyledMain = styled.main`
    background-color: rgb(255, 255, 255, 0.8);
    width: 85%; /* of wrapper div */
    padding: /*30px*/1.98vw;

    @media screen and (max-width: 750px) {
        width: 100%;
        min-height: 100vh;
    }
`;


export default function Root() {
    return (
        <>
            <Header/>

            <Wrapper>
                <Nav/>
                <StyledMain>
                    <Routes>
                        <Route path="/*" element={<Home/>}/>
                        <Route path="/documents/*" element={<Documents/>}/>
                        <Route path="/education/*" element={<Education/>}/>
                        <Route path="/experiences/*" element={<Experiences/>}/>
                        <Route path="/projects/*" element={<Projects/>}/>
                        <Route path="/leadership/*" element={<Leadership/>}/>
                    </Routes>
                </StyledMain>
            </Wrapper>

            <Footer/>
        </>
    );
}