import '../sass/testimonials.scss';
import pt13 from '../assets/UI Design/Portfolio-13.png';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Card() {
    return (
        <div className='card'>
            <div className="bar">
                <img src={pt13} />
                <div>
                    <b>William Wilson</b>
                    <small>CEO of bisnisrumahan</small>
                </div>
            </div>
            <p>
                <b>
                    “Love senyuman because make project fast and great”
                </b>
            </p>
            <p>
                "The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."
            </p>
        </div>
    );
}

export function Testimonials() {
    return (
        <section className="testimonials">
            <h1>Testimonials from our clients</h1>
            <div className="cards">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true,}}
                    autoplay={true}
                    start
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }}
                >
                    {
                        (new Array(10).fill(0)).map((d, i) => {
                            return <SwiperSlide key={i}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'Center',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    width: '100%',
                                    height: '100%',
                                }}>
                                    <Card />
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    );
}