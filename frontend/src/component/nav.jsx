import { Link } from 'react-router-dom';
import '../sass/global.scss';
import '../sass/navbar.scss';

export function Navbar(){
    return (
        <nav className='navbar'>
            <b className='logo'>SenyumanId</b>
            <div className='menu'>
                <Link to={"/"} title="Home">Home</Link>
                <li>About Us</li>
                <Link to={"/ui-kit"} title="Ui Kit">Ui Kit</Link>
            </div>
            <a className='action'>Contact Us</a>
        </nav>
    );
}