import React from 'react';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { Img } from '@/components/common/Element';
import { Icon } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';
import { HomeData } from '@/Dummy/home';
import { IBanner } from '@/lib/interface';

import { ButtonInteraction } from './styled';
import 'swiper/css';

export const BannerCarousel: React.FC = () => {
    const data = HomeData.data.items.find((item) => item.sectionType === 'banner');
    const items: any = data?.items;
    const swiper = React.useRef<SwiperRef>(null);
    return (
        <Container
            tw="relative max-w-[1500px] w-full
                [.banner-next]:(animate-moveLeft z-[-1])
                [.banner-prev]:(animate-moveRight z-[-1])"
        >
            <Swiper
                ref={swiper}
                tw="w-full h-full"
                autoplay={{ delay: 3000 }}
                allowTouchMove={false}
                spaceBetween={30}
                slidesPerView={3}
                speed={500}
                centeredSlides={true}
                initialSlide={1}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                slideNextClass="banner-next"
                slidePrevClass="banner-prev"
                loop
                onBeforeSlideChangeStart={(s) => console.log(s)}
            >
                {items.map((item: IBanner) => (
                    <SwiperSlide key={item.encodeId}>
                        <Container tw="rounded-xl cursor-pointer">
                            <Img src={item.banner} alt="" tw="rounded-xl w-full h-full" />
                        </Container>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ButtonInteraction tw="left-[25px]" onClick={() => swiper.current?.swiper.slidePrev()}>
                <Icon icon="ic-go-left" size="25px" />
            </ButtonInteraction>
            <ButtonInteraction tw="right-[25px]" onClick={() => swiper.current?.swiper.slideNext()}>
                <Icon icon="ic-go-right" size="25px" />
            </ButtonInteraction>
        </Container>
    );
};
