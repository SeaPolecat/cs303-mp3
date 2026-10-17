import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledNav = styled.nav`
    background-color: darkcyan;
    width: 15%; /* of wrapper div */
    padding-bottom: /*10px*/0.66vw;
    border-radius: /*30px*/1.98vw 0 0 /*30px*/1.98vw;

    li {
        list-style: none;
        text-align: left;
        margin: /*20px*/1.32vw 0;
        padding: 0 /*20px*/1.32vw;
    }

    a {
        color: white;
        text-decoration: none;
        transition: 0.2s;
        font-size: calc(5px + 1vw);
    }
    
    a:hover {
        color: black;
    }

    @media screen and (max-width: 750px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 7vh;
        border-radius: /*30px*/1.98vw /*30px*/1.98vw 0 0;

        li {
            display: inline;
            padding: /*5px*/0.33vw;
        }

        a {
            color: #434343;
            background-color: lightblue;
            font-size: calc(8px + 1vw);
            padding: /*8px*/0.53vw /*10px*/0.66vw;
            border-radius: /*10px*/0.66vw;
        }

        a:hover {
            color: white;
        }
    }
`;


export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/documents'}>Documents</Link>
                </li>
                <li>
                    <Link to={'/education'}>Education</Link>
                </li>
                <li>
                    <Link to={'/experiences'}>Experiences</Link>
                </li>
                <li>
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li>
                    <Link to={'/leadership'}>Leadership</Link>
                </li>
            </ul>
        </StyledNav>
    );
}