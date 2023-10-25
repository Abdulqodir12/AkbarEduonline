import "../AboutTeacher/AboutTeacher.scss";
import ustozd from "../../assets/ustozd.png";
import ustoz from "../../assets/ustoz.png";
import ustoztajriba from "../../assets/ustoztajriba.png";
import grenimg from "../../assets/green-img.png";
import cap from "../../assets/cap.png";
import boccmar from "../../assets/BookBookmark.png";
import btnimg from "../../assets/button img1.png";
import videoimg from "../../assets/videoimg.png";
import kosmos from "../video/kosmos-video.mp4";
const AboutTeacher = () => {
    return (
        <section className='main-section'>
            <div className='main-section__wrapper'>
                <div className='main-section__wrapper-con'>
                    <div className='main-section__wrapper-container'>
                        <img
                            className='main-section__wrapper-container-img1'
                            src={ustozd}
                            width={517}
                            height={549}
                            alt='rasm'
                        />

                        <img
                            className='main-section__wrapper-container-img2'
                            src={ustoz}
                            width={233}
                            height={288}
                            alt='rasm'
                        />
                        <img
                            className='main-section__wrapper-container-img3'
                            src={ustoztajriba}
                            width={118}
                            height={118}
                            alt='rasm'
                        />

                        <p className='main-section__wrapper-container-text1'>
                            8 Yillik <br />
                            Tajriba
                        </p>
                    </div>
                    <div className='main-section__wrapper-container2'>
                        <p className='main-section__wrapper-container2-text1'>
                            O’qituvchi haqida
                        </p>
                        <h2 className='main-section__wrapper-container2-title'>
                            Akbar Ismoil Baxodir o’g’li
                        </h2>

                        <div className='main-section__wrapper-container2-con'>
                            <img
                                className='main-section__wrapper-container2-con-img'
                                src={grenimg}
                                width={5}
                                height={116}
                                alt='rasm'
                            />
                            <p className='main-section__wrapper-container2-con-text'>
                                Akbar Ismoil Baxodir o’g’li, xususiy ta’lim
                                tarmog’ida ko’p yillik tajribaga ega mutaxassis.
                                Xalqaro Islom Akademiyasi bakalavr bosqichi
                                bitiruvchisi va magistranti. Arab tilidan CEFR
                                sertifikati sohibi. Akbar Education Group
                                xorijiy tillar o’quv markazi asoschisi.
                            </p>
                        </div>

                        <div className='main-section__wrapper-container2-advantage1'>
                            <img
                                className='main-section__wrapper-container2-advantage1-img'
                                src={cap}
                                width={32}
                                height={32}
                                alt='rasm'
                            />
                            <div>
                                <h3 className='main-section__wrapper-container2-advantage1-title'>
                                    Advantage 1
                                </h3>

                                <p className='main-section__wrapper-container2-advantage1-text'>
                                    O'quvchida tilga bo'lgan qiziqishni uyg'ota
                                    oladigan o'qituvchi
                                </p>
                            </div>
                        </div>
                        <div className='main-section__wrapper-container2-advantage1'>
                            <img
                                className='main-section__wrapper-container2-advantage2-img'
                                src={boccmar}
                                width={32}
                                height={32}
                                alt='rasm'
                            />
                            <div>
                                <h3 className='main-section__wrapper-container2-advantage2-title'>
                                    Advantage 2
                                </h3>

                                <p className='main-section__wrapper-container2-advantage2-text'>
                                    Darslarga talabchanlik, masuliyat va
                                    jiddu-jahd bilan zamonaviy yondashuv
                                </p>
                            </div>
                        </div>

                        <button className='main-section__wrapper-container2-button'>
                            Batafsil o’qish
                            <img
                                src={btnimg}
                                width={32}
                                height={32}
                                alt='rasm'
                            />
                        </button>
                    </div>
                </div>

                <video
                    className='main-section__wrapper-video'
                    poster={videoimg}
                    width={842}
                    height={549}
                    controls>
                    <source src={kosmos} type='video/mp4' />
                </video>
            </div>
            <div>
                <div className='about-teacher'>
                    <div className='about-teacher__contact'>
                        <div className='about-teacher__contact-one'>
                            <p className='about-teacher__contact-text'>
                                Savollaringiz bormi?
                            </p>
                            <h3 className='about-teacher__contact-title'>
                                Bizga aloqaga chiqing!
                            </h3>
                        </div>
                        <div className='about-teacher__contact-two'>
                            <button
                                className='about-teacher__contact-btn'
                                type='button'>
                                <a href='#'>Ro’yxatdan o’ting</a>
                            </button>
                            <p className='about-teacher__contact-desc'>
                                YOKI QO’NG’IROQ QILING
                            </p>
                            <a
                                className='about-teacher__contact-tel'
                                href='tel:+998-33-391-19-19'>
                                +998 (95) 193-31-93
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeacher;
