import { Img, Text } from '@/components/common/Element';
import { Container } from '@/components/common/Layout';

interface NextSongProps {}

export const NextSong: React.FC<NextSongProps> = () => (
    <Container tw="flex-col p-2 w-[250px] gap-2">
        <Text tw="text-xs">Phát tiếp theo</Text>
        <Container tw="gap-[10px]">
            <Img
                tw="w-10 h-10 rounded-md"
                src={`https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp
                                    /cover/9/f/5/8/9f58cc8633750bb9a12bc153854a870a.jpg`}
            />
            <Container tw="flex-col justify-start gap-[3px]">
                <Container tw="items-center gap-2">
                    <Text>Cuối Cùng Thì</Text>
                </Container>
                <Container>
                    <Text>Jack - J97</Text>
                </Container>
            </Container>
        </Container>
    </Container>
);
