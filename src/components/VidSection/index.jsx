import React from "react";
import "./video.scss";
import aka from "../../assets/aka.png";
import ustoz2 from "../../assets/ustoz5.png";
import ustoz3 from "../../assets/ustoz2.png";
import ustoz4 from "../../assets/ustoz3.png";
import ustoz5 from "../../assets/ustoz4.png";
import kosmos from "../video/kosmos-video.mp4";

const VidSection = () => {
    return (
        <section>
            <div className='video-section'>
                <h3 className='video-section__title'>
                    Darslarimizdan lavhalar
                </h3>
                <div className='video-section__works'>
                    <video
                        className='video-section__video'
                        poster={aka}
                        controls>
                        <source src={kosmos} type='video/mp4' />
                    </video>
                    <video
                        className='video-section__video1'
                        poster={ustoz2}
                        controls>
                        <source src={kosmos} type='video/mp4' />
                    </video>
                    <video
                        className='video-section__video2'
                        poster={ustoz3}
                        controls>
                        <source src={kosmos} type='video/mp4' />
                    </video>
                    <video
                        className='video-section__video3'
                        poster={ustoz4}
                        controls>
                        <source src={kosmos} type='video/mp4' />
                    </video>
                    <video
                        className='video-section__video4'
                        poster={ustoz5}
                        controls>
                        <source src={kosmos} type='video/mp4' />
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VidSection;
