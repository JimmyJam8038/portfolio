import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Flappy-bird.jpeg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Flappy Bird</h3>
                            <p>
                                Game
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Python
                            </p>
                            <a href="https://jimmyjam8038.itch.io/flappy-bird" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/jimmyjam8038" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./snake.jpeg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Snake</h3>
                            <p>
                                Game
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> Python
                            </p>
                            <a href="https://jimmyjam8038.itch.io/snake" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Jimmyjam8038" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./space-invaders.avif`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Space Invaders</h3>
                            <p>
                                Game
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Python
                            </p>
                            <a href="https://jimmyjam8038.itch.io/spaceinvaders" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Jimmyjam8038" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Geometry-dash.jpeg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Gd player lookup</h3>
                            <p>
                                Account And Level Finder
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> HTML/CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://gd-player-finder.lovable.app" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Jimmyjam8038" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Hangman.jpeg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Hangman</h3>
                            <p>
                                Game
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://jimmyjam8038.github.io/HangMan/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Jimmyjam8038" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}

        </section>

    )
};
export default React.memo(Project);