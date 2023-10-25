import "./Header.scss";
import akbarlogo from "../../assets/Logo.png";
const Header = () => {
    return (
        <header className='main-header '>
            <img
                className='main-header__logo'
                src={akbarlogo}
                width={139}
                height={64.394}
                alt='logo'
            />
            <nav className='main-header__nav'>
                <ul className='main-header__list'>
                    <li className='main-header__item'>
                        <a className='main-header__list-link' href='#'>
                            Biz haqimizda
                        </a>
                    </li>
                    <li className='main-header__item'>
                        <a className='main-header__list-link' href='#'>
                            Kurs haqida
                        </a>
                    </li>
                    <li className='main-header__item'>
                        <a className='main-header__list-link' href='#'>
                            Afzalliklar
                        </a>
                    </li>
                    <li className='main-header__item'>
                        <a className='main-header__list-link' href='#'>
                            Mundarija
                        </a>
                    </li>
                    <li className='main-header__item'>
                        <a className='main-header__list-link' href='#'>
                            Narxlar
                        </a>
                    </li>
                    <li className='main-header__item'>
                        <a className='main-header__list-link' href='#'>
                            Kursdan so’ng
                        </a>
                    </li>
                    <li className='main-header__item1'>
                        <a className='main-header__list-link' href='#'>
                            Aloqa
                        </a>
                    </li>
                </ul>
                <button className='main-header__button'>
                    Ro’yxatdan o’tish
                </button>
            </nav>
        </header>
    );
};

export default Header;
