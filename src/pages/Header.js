import { Link } from "react-router-dom";


const Header = ({ DATA }) => {
    return (
        <header className="Header">
            <h1><Link to="/">{DATA}</Link></h1>
            <i className="xi-bars"></i>
            <nav>
                <ul>
                    <li><Link to="/content">content</Link></li>
                    <li><Link to="/event">event</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;