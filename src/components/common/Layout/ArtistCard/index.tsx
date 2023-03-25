import { TextCustomHover } from './styled';
import { Img, Text } from '../../Element';
import { Container } from '../Container';

export const ArtistCard: React.FC = () => (
    <Container
        className="group"
        tw="gap-[10px] items-center justify-between p-[10px] cursor-pointer w-full max-w-[800px]"
    >
        <Container tw="relative w-10 h-10 rounded-full">
            <Img
                src={`https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp
                /cover/9/f/5/8/9f58cc8633750bb9a12bc153854a870a.jpg`}
                tw="rounded-full"
            />
        </Container>
        <Container tw="flex-col justify-start gap-[3px]">
            <Text>Mr.Siro</Text>
            <TextCustomHover>Nghệ Sĩ 805k quan tâm</TextCustomHover>
        </Container>
    </Container>
);
