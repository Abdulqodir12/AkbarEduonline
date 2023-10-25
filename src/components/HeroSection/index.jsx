import React from "react";
import "../HeroSection/style.scss";
import herobtn from "../../assets/button img1.png";
import dars from "../../assets/dars.png";
import text from "../../assets/FileText.png";
import bookmark from "../../assets/BookmarkSimple.png";
import videochat from "../../assets/video chat.png";
import online from "../../assets/online.png";

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className='hero-section__wrapper'>
                <div className='hero-section__wrapper-container'>
                    <p className='hero-section__wrapper-container-text-arab'>
                        <b style={{ color: "#207B3E", marginLeft: "5px" }}>
                            تَعَلَّمُوا الْعَرَبِيَّةَ
                        </b>
                        فَإِنَّهَا تُثَبِّتُ الْعَقْلَ ، وَتَزِيدُ فِي
                        الْمُرُوءَةِ
                    </p>
                    <h2 className='hero-section__wrapper-container-title'>
                        Arab tilini o’rganinglar
                        <span className='hero-section__wrapper-container-title-span'>
                            , albatta u aqlni mustahkamlaydi va muruvatni ziyoda
                            qiladi.
                        </span>
                    </h2>
                    <button className='hero-section__wrapper-container-button'>
                        Ro’yxatdan o’tish
                        <img
                            className='hero-section__wrapper-container-button-img'
                            src={herobtn}
                            alt='rasm'
                            width={32}
                            height={32}
                        />
                    </button>
                </div>
                <div className='hero-section__wrapper-container2'>
                    <div className='hero-section__container2-con'>
                        <div className='hero-section__card'>
                            <img
                                className='hero-section__card-img'
                                src={dars}
                                width={240}
                                height={161}
                                alt='rasm'
                            />
                            <p className='hero-section__card-img-text'>
                                ONLINE
                            </p>
                            <div className='hero-section__bookmark-container'>
                                <img
                                    className='hero-section__filetext'
                                    src={text}
                                    width={20}
                                    height={20}
                                    alt='rasm'
                                />
                                <p className='hero-section__filetext-text'>
                                    32 ta dars
                                </p>
                                <img
                                    className='hero-section__bookmark'
                                    src={bookmark}
                                    width={20}
                                    height={20}
                                    alt='rasm'
                                />
                                <p className='hero-section__bookmark-text'>
                                    9 ta modul
                                </p>
                            </div>
                            <h3 className='hero-section__card-title'>
                                Arab tili va madaniyati kursi
                            </h3>
                            <p className=' hero-section__card-text'>
                                Arab tilini boshlang’ich darajadan yangi uslubda
                                o’rgatuvchi amaliy online kurs
                            </p>
                        </div>
                        <div className='hero-section__card-demo'>
                            <img
                                className='hero-section__card-demo-img'
                                src={online}
                                width={55}
                                height={55}
                                alt='rasm'
                            />
                            <h3 className='hero-section__card-demo-title'>
                                Demo Dars
                            </h3>
                            <p className='hero-section__card-demo-text'>
                                Bepul
                            </p>
                            <button className='hero-section__card-demo-button'>
                                Yozilish
                                <img
                                    className='hero-section__card-demo-button-img'
                                    src={herobtn}
                                    width={16}
                                    height={16}
                                    alt='rasm'
                                />
                            </button>
                        </div>
                    </div>

                    <img
                        className='hero-section__wrapper-img'
                        src={videochat}
                        width={320}
                        height={420}
                        alt='rasm'
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
