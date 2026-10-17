import { Link } from "react-router-dom";


export default function Nav() {
    return (
        <nav>
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
        </nav>
    );
}