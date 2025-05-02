import { SwiperOptions } from 'swiper/types'

export const getBreakpoints = (): SwiperOptions['breakpoints'] => {
  return {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 'auto',
      spaceBetween: 48,
    },
    1536: {
      slidesPerView: 'auto',
      spaceBetween: 48,
    },
    1920: {
      slidesPerView: 'auto',
      spaceBetween: 48,
    },
  }
}
