import { Img, Span, TextHover } from '@/components/common/Element';

import { Icon } from '../../interaction';
import { Container } from '../Container';

const steps = [
    {
        icon: 'ic-download',
        text: 'Tải xuống',
    },
    {
        icon: 'ic-16-Lyric',
        text: 'Lời bài hát',
    },
    {
        icon: 'ic-denial',
        text: 'Chặn',
    },
];

const stepsAction = [
    {
        icon: 'ic-add-play-now',
        text: 'Thêm vào danh sách phát',
    },
    {
        icon: 'ic-play-next',
        text: 'Phát tiếp theo',
    },
    {
        icon: 'ic-16-Add',
        text: 'Thêm vào playlist',
    },
    {
        icon: 'ic-comment',
        text: 'Bình luận',
    },
    {
        icon: 'ic-link',
        text: 'Sao chép link',
    },
    {
        icon: 'ic-share',
        text: 'Chia sẻ',
    },
];

export const ContextMenu: React.FC = () => (
    <Container tw="w-[280px] p-[15px] flex-col gap-[15px] bg-layout-primary rounded-md shadow-contextMenu">
        <Container tw="gap-[10px] items-center">
            <Img
                src={`https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/
        cover/8/6/7/d/867dea78919c4ad9e000d1385c9042ab.jpg`}
                tw="w-10 h-10 rounded-md"
            />
            <Container tw="flex-col gap-[2px]">
                <TextHover tw="font-semibold leading-4">Quả Phụ Tướng</TextHover>
                <Container tw="gap-[10px]">
                    <Container tw="text-[#a0a0a0] text-xs font-semibold">
                        <Icon icon="ic-like" />
                        <Span>847K</Span>
                    </Container>
                    <Container tw="text-[#a0a0a0] text-xs font-semibold">
                        <Icon icon="ic-view" />
                        <Span>29.6M</Span>
                    </Container>
                </Container>
            </Container>
        </Container>
        <Container tw="bg-whiteAlpha-10 rounded-lg ">
            {steps.map((step, index) => (
                <button
                    key={index}
                    tw="flex-col hover:(bg-whiteAlpha-10) rounded-lg py-2 w-full flex justify-center items-center"
                >
                    <Icon icon={step.icon} />
                    <Span tw="text-[10px] font-bold">{step.text}</Span>
                </button>
            ))}
        </Container>
        <Container tw="-mx-[15px] flex-col">
            {stepsAction.map((step, index) => (
                <button
                    key={index}
                    tw="py-[10px] pl-[15px] pr-5 hover:(bg-whiteAlpha-10) flex gap-[15px] items-center"
                >
                    <Icon icon={step.icon} />
                    <Span tw="text-sm font-medium text-textColor-navigation">{step.text}</Span>
                </button>
            ))}
        </Container>
    </Container>
);
