import { VipLabel } from './components';
import { TextCustom, TextCustomHover } from './styled';
import { Img, Text } from '../../Element';
import { ButtonIcon, Icon } from '../../interaction';
import { Center } from '../Center';
import { Container } from '../Container';

export const SongCard: React.FC = () => (
    <Container
        className="group"
        tw="items-center justify-between p-[10px] cursor-pointer w-full max-w-[800px]"
    >
        <Container tw="gap-[10px]">
            <Container tw="relative w-10 h-10">
                <Img
                    src={`https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp
                /cover/9/f/5/8/9f58cc8633750bb9a12bc153854a870a.jpg`}
                />
                <Center tw="absolute inset-0 bg-darkAlpha-50">
                    <Icon icon="ic-play" />
                    {/* <Img
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                        tw="w-[18px] h-[18px] rounded-none"
                    /> */}
                </Center>
            </Container>
            <Container tw="flex-col justify-start gap-[3px]">
                <Container tw="items-center gap-2">
                    <Text>Cuối Cùng Thì</Text>
                    <VipLabel />
                </Container>
                <Container>
                    <TextCustomHover>Jack - J97</TextCustomHover>
                </Container>
            </Container>
        </Container>
        <TextCustomHover tw="hidden md:block">Cuối Cùng Thì (Singer)</TextCustomHover>
        <Container tw="w-32 justify-end">
            <TextCustom tw="group-hover:hidden block">03:33</TextCustom>
            <Container tw="gap-2 items-center group-hover:flex hidden">
                <ButtonIcon size="large" icon="ic-karaoke" content="Phát cùng lời bài hát" hover />
                <ButtonIcon
                    size="large"
                    icon="ic-like"
                    content="Thêm vào thư viện"
                    hover
                    tw="hidden md:block"
                />
                <ButtonIcon size="large" icon="ic-more" content="Khác" hover />
            </Container>
        </Container>
    </Container>
);
