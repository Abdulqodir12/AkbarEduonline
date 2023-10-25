import "./arabtili.scss";
import strelka2  from "../../assets/green strelka.png"
import strelka1 from "../../assets/gren strelka2.png"
const ArabTiliSection = () => {
    return (
        <section className='section-imkoniyatlar'>
            <div className='section-imkoniyatlar__wrapper'>
                <p className='section-imkoniyatlar__wrapper-text'>
                    Imkoniyatlar
                </p>
                <h2 className='section-imkoniyatlar__wrapper-title'>
                    Nima uchun Arab tili?
                </h2>
                <div className='section-imkoniyatlar__wrapper-container'>
                    <div className='section-imkoniyatlar__wrapper-container-card'>
                        <p className='section-imkoniyatlar__wrapper-container-card-title'>
                            1
                        </p>
                        <h3 className='section-imkoniyatlar__wrapper-container-card-title2'>
                            Global til
                        </h3>
                        <p className='section-imkoniyatlar__wrapper-container-card-text'>
                            450 milliondan ortiq odam ona tili sifatida
                            gapiruvchi zamonaviy biznes va ta'lim tili
                        </p>
                    </div>
                    <img
                        className='section-imkoniyatlar__wrapper-container-card-img'
                        src={strelka1}
                        width={31}
                        height={74}
                        alt='rasm'
                    />
                    <div className='section-imkoniyatlar__wrapper-container-card2'>
                        <p className='section-imkoniyatlar__wrapper-container-card-title'>
                            2
                        </p>
                        <h3 className='section-imkoniyatlar__wrapper-container-card-title3'>
                            Top tillardan biri
                        </h3>
                        <p className='section-imkoniyatlar__wrapper-container-card-text2'>
                            Top 5 dunyo tillariga kiruvchi va BMTning 6 ta
                            rasmiy tilidan biri
                        </p>
                    </div>
                    <img
                        className='section-imkoniyatlar__wrapper-container-card-img2'
                        src={strelka2}
                        width={31}
                        height={74}
                        alt='rasm'
                    />
                    <div className='section-imkoniyatlar__wrapper-container-card'>
                        <p className='section-imkoniyatlar__wrapper-container-card-title'>
                            3
                        </p>
                        <h3 className='section-imkoniyatlar__wrapper-container-card-title2'>
                            Islom tili
                        </h3>
                        <p className='section-imkoniyatlar__wrapper-container-card-text'>
                            Arab tili Qur'on va Sunnat tili
                        </p>
                    </div>

                    <img
                        className='section-imkoniyatlar__wrapper-container-card-img3'
                        src={strelka1}
                        width={31}
                        height={74}
                        alt='rasm'
                    />
                    <div className='section-imkoniyatlar__wrapper-container-card4'>
                        <p className='section-imkoniyatlar__wrapper-container-card-title'>
                            4
                        </p>
                        <h3 className='section-imkoniyatlar__wrapper-container-card-title3'>
                            Noyob manbalar kaliti
                        </h3>
                        <p className='section-imkoniyatlar__wrapper-container-card-text2'>
                            Har qanday sohada cheksiz, noyob va asl manbalardan
                            foydalanishga yo'l ochib beruvchi til
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArabTiliSection;
