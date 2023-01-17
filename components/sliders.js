import { Swiper, SwiperProps, SwiperSlide } from "swiper/react"
import { Pagination, A11y } from 'swiper'

import 'swiper/css'

export default function Slider({ settings, children}) {

    return <Swiper modules={[Pagination]} {...settings}>{ children }
    </Swiper>
}
