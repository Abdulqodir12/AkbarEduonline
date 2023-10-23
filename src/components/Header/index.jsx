import "./Header.scss";
import akbarlogo from "../../assets/Logo.png";
const Header = () => {
    return (
        <header className='main-header'>
            <nav className='main-nav'>
                <img src={akbarlogo} width={139} height={64.394} alt='logo' />
            </nav>
        </header>
    );
};

export default Header;
