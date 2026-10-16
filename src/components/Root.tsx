import {Route, Routes} from "react-router-dom";
import Nav from "./Nav.tsx";
import Home from "./Home.tsx";
import Documents from "./Documents.tsx";
import Education from "./Education.tsx";
import Experiences from "./Experiences.tsx";
import Projects from "./Projects.tsx";
import Leadership from "./Leadership.tsx";


export default function Root() {
    return (
        <>
            <Nav/>

            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/documents/*" element={<Documents/>}/>
                <Route path="/education/*" element={<Education/>}/>
                <Route path="/experiences/*" element={<Experiences/>}/>
                <Route path="/projects/*" element={<Projects/>}/>
                <Route path="/leadership/*" element={<Leadership/>}/>
            </Routes>
        </>
    );
}