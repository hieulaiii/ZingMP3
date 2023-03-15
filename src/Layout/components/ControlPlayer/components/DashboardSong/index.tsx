import { Img, Text } from '@/components/common/Element';
import { ButtonIcon, TimeSlider } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';

interface DashboardSongProps {}
export const DashboardSong: React.FC<DashboardSongProps> = () => (
    <Container tw="flex-col w-full justify-center">
        <Container tw="items-center justify-center gap-x-[20px] h-[50px]">
            <ButtonIcon content="Bật phát ngẫu nhiên" icon="ic-shuffle" hover />
            <ButtonIcon content="" icon="ic-pre" hover />
            <Container tw="cursor-pointer items-center">
                <i className="ic-play-circle-outline" tw="text-[40px] flex items-center" />
            </Container>
            <ButtonIcon
                content={
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
                }
                icon="ic-next"
                hover
            />
            <ButtonIcon content="Tắt phát lại" icon="ic-repeat-one" hover />
        </Container>
        <Container tw="gap-[10px]">
            <Text tw="text-xs font-semibold text-layout-progressbar-player">02:22</Text>
            <TimeSlider defaultValue={50} />
            <Text tw="text-xs font-semibold">04:50</Text>
        </Container>
    </Container>
);
