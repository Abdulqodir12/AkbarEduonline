import "./mundarija.scss";
import plus from "../../assets/buttonplus.png";
const SectionMundarija = () => {
    return (
        <section className='section-kurs'>
            <div className='section-kurs__wrapper'>
                <div className='section-kurs__wrapper-container'>
                    <h3 className='section-kurs__wrapper-container-title'>
                        Kurs mundarijasi
                    </h3>
                    <div className='section-kurs__wrapper-container-card'>
                        <button className='section-kurs__wrapper-container-card-button'>
                            Bosqich 1
                        </button>
                        <button className='section-kurs__wrapper-container-card-button2'>
                            Bosqich 2
                        </button>
                    </div>
                </div>

                <ul className='section-kurs__wrapper-list'>
                    <li className='section-kurs__wrapper-list-item'>
                        <p className='section-kurs__wrapper-list-item-tetxt'>
                            1-dars: Arab tili haqida.
                        </p>
                        <button className='section-kurs__wrapper-list-item-button'>
                            <img
                                className='section-kurs__wrapper-list-item-button-img'
                                src={plus}
                                width={24}
                                height={24}
                                alt='rasm'
                            />
                        </button>
                    </li>
                    <li className='section-kurs__wrapper-list-item'>
                        <p className='section-kurs__wrapper-list-item-tetxt'>
                            2-dars: Arab alifbosi. Kirish.
                        </p>
                        <button className='section-kurs__wrapper-list-item-button'>
                            <img
                                className='section-kurs__wrapper-list-item-button-img'
                                src={plus}
                                width={24}
                                height={24}
                                alt='rasm'
                            />
                        </button>
                    </li>
                    <li className='section-kurs__wrapper-list-item'>
                        <p className='section-kurs__wrapper-list-item-tetxt'>
                            3-dars: Harflar maxrajlari.
                        </p>
                        <button className='section-kurs__wrapper-list-item-button'>
                            <img
                                className='section-kurs__wrapper-list-item-button-img'
                                src={plus}
                                width={24}
                                height={24}
                                alt='rasm'
                            />
                        </button>
                    </li>
                    <li className='section-kurs__wrapper-list-item'>
                        <p className='section-kurs__wrapper-list-item-tetxt'>
                            4-dars: Harflar maxrajlari. Tatbiq.
                        </p>

                        <button className='section-kurs__wrapper-list-item-button'>
                            <img
                                className='section-kurs__wrapper-list-item-button-img'
                                src={plus}
                                width={24}
                                height={24}
                                alt='rasm'
                            />
                        </button>
                    </li>
                    <li className='section-kurs__wrapper-list-item'>
                        <p className='section-kurs__wrapper-list-item-tetxt'>
                            5-dars: Harflar sifatlari.
                        </p>

                        <button className='section-kurs__wrapper-list-item-button'>
                            <img
                                className='section-kurs__wrapper-list-item-button-img'
                                src={plus}
                                width={24}
                                height={24}
                                alt='rasm'
                            />
                        </button>
                    </li>
                    <li className='section-kurs__wrapper-list-item'>
                        <p className='section-kurs__wrapper-list-item-tetxt'>
                            6-dars: Harflar sifatlari. Tatbiq.
                        </p>

                        <button className='section-kurs__wrapper-list-item-button'>
                            <img
                                className='section-kurs__wrapper-list-item-button-img'
                                src={plus}
                                width={24}
                                height={24}
                                alt='rasm'
                            />
                        </button>
                    </li>
                    <li className='section-kurs__wrapper-list-item'>
                        <p className='section-kurs__wrapper-list-item-tetxt'>
                            7-dars: Javf va undagi maxrajlar.
                        </p>

                        <button className='section-kurs__wrapper-list-item-button'>
                            <img
                                className='section-kurs__wrapper-list-item-button-img'
                                src={plus}
                                width={24}
                                height={24}
                                alt='rasm'
                            />
                        </button>
                    </li>
                    <li className='section-kurs__wrapper-list-item'>
                        <p className='section-kurs__wrapper-list-item-tetxt'>
                            8-dars: ت/م/ز/ر Harflari.
                        </p>

                        <button className='section-kurs__wrapper-list-item-button'>
                            <img
                                className='section-kurs__wrapper-list-item-button-img'
                                src={plus}
                                width={24}
                                height={24}
                                alt='rasm'
                            />
                        </button>
                    </li>
                    <li className='section-kurs__wrapper-list-item'>
                        <p className='section-kurs__wrapper-list-item-tetxt'>
                            9-dars: ك/ب/ي/ن Harflari.
                        </p>

                        <button className='section-kurs__wrapper-list-item-button'>
                            <img
                                className='section-kurs__wrapper-list-item-button-img'
                                src={plus}
                                width={32}
                                height={32}
                                alt='rasm'
                            />
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SectionMundarija;
