import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './workSlider.css'

import img1 from '../assets/dribble1.jpeg'
import img2 from '../assets/dribble2.jpeg'
import img3 from '../assets/dribble3.jpeg'
import img4 from '../assets/dribble4.jpeg'

const WorkSlider = () => {
    return (
        <div className='py-16 space-y-14'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
            </Swiper>

            <div className='flex justify-center items-center'>
                <button className='button-outline'>View recent work</button>
            </div>
        </div>
    );
};

export default WorkSlider;