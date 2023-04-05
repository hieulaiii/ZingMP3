import { Img, Span } from '@/components/common/Element';
import { Icon } from '@/components/common/interaction';

import { Container } from '../../../Container';

interface LatestProductProps {}

export const LatestProduct: React.FC<LatestProductProps> = () => (
    <Container tw="flex-col gap-2">
        <Container
            tw="relative w-[70px] h-[70px] rounded overflow-hidden 
        hover:([.play-element]:flex [.img-element]:scale-110)"
        >
            <Img
                className="img-element"
                // eslint-disable-next-line max-len
                src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/b/5/7/5b57e6c61848cfed2fa19cd31b293898.jpg"
                tw="rounded duration-500"
            />
            <Container
                className="play-element"
                tw="absolute inset-0 bg-darkAlpha-50 
                            justify-center items-center hidden cursor-pointer"
            >
                <Icon icon="ic-svg-play-circle" width={40} height={40} />
            </Container>
        </Container>
        <Container tw="flex-col">
            <Span tw="text-xs line-clamp-2 text-whiteAlpha-80 cursor-pointer hover:text-textColor-linkHover">
                Thị Mầu (Single)
            </Span>
            <Span tw="text-[10px] text-whiteAlpha-50">2023</Span>
        </Container>
    </Container>
);
