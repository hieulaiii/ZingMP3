import { Img, Text } from '../../Element';
import { ButtonIcon } from '../../interaction';
import { Center } from '../Center';
import { Container } from '../Container';

export const DynamicCard: React.FC = () => (
    <Container tw="flex-col w-[280px]">
        <Container tw="relative cursor-pointer overflow-hidden rounded-md" className="group">
            <Img
                src={`https://photo-resize-zmp3.zmdcdn.me/
                w320_r1x1_webp/cover/e/d/7/a/ed7af2ec07e6c781064a65be60e16990.jpg`}
                tw="rounded-md duration-500 group-hover:scale-110"
            />
            <Center tw="absolute inset-0 bg-darkAlpha-50 hidden group-hover:flex duration-500 rounded-md gap-8">
                <ButtonIcon content="Thêm vào thư viện" icon="ic-like" hover />
                <Container tw="cursor-pointer items-center">
                    <i className="ic-play-circle-outline" tw="text-[50px] flex items-center" />
                </Container>
                <ButtonIcon content="Khác" icon="ic-more" hover />
            </Center>
        </Container>
        <Text>Pop Ballad Việt Nổi Bật</Text>
        <Text>Những bản Ballad Việt 'tốn nước mắt'</Text>
        {/* <Text>213</Text> */}
    </Container>
);
