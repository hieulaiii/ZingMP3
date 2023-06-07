import { Text } from '@/components/common/Element';
import { Button, ButtonIcon } from '@/components/common/interaction';
import { Center, Container, DynamicSongCard } from '@/components/common/Layout';
import { useChart } from '@/lib/hook/chart';
import { ISong } from '@/lib/interface';

import { StatusOnChart } from '../TopZing100/components';

export const WeekChart: React.FC = () => {
    const { chart } = useChart();
    const weekChart = chart?.weekChart;
    const country: Record<string, string> = {
        vn: 'Việt Nam',
        us: 'US-UK',
        korea: 'K-Pop',
    };
    return (
        <Container tw="relative mx-0 lg:-mx-[60px] px-[60px]">
            <Container tw="absolute inset-0 bg-WeekChart z-[-1] bg-cover grayscale" />
            <Container tw="absolute inset-0 bg-layout-chartBG z-[1]" />
            <Container tw="relative flex-col gap-10 py-6 z-10 w-full">
                <Text tw="text-[40px] font-bold capitalize text-white">Bảng Xếp Hạng Tuần</Text>
                <Container tw="gap-4 flex-col lg:flex-row justify-between ">
                    {weekChart &&
                        Object.entries(weekChart).map(([key, value], index) => (
                            <Container
                                key={index}
                                tw="rounded-2xl flex-col bg-whiteAlpha-5 py-5 px-[10px] w-full"
                            >
                                <Container tw="px-12 items-center gap-2 pb-2">
                                    <Text tw="text-[24px] font-bold capitalize text-white">
                                        {country[key]}
                                    </Text>
                                    <ButtonIcon icon="ic-play" content="" tw="bg-purple-primary" />
                                </Container>
                                {value.items.map(
                                    (song, index) =>
                                        index < 5 && (
                                            <DynamicSongCard
                                                tw="before:(bg-transparent)"
                                                key={index}
                                                song={song as unknown as ISong}
                                                customShow={{
                                                    isAlbum: false,
                                                    isLike: false,
                                                }}
                                            >
                                                <DynamicSongCard.Action>
                                                    <StatusOnChart
                                                        rating={index}
                                                        isColorRate={false}
                                                        tw="p-0 [span]:(w-auto px-2)"
                                                    />
                                                </DynamicSongCard.Action>
                                            </DynamicSongCard>
                                        )
                                )}
                                <Center tw="pt-6">
                                    <Button
                                        variant="outlined"
                                        tw="py-2 text-sm font-semibold hover:bg-whiteAlpha-10"
                                        borderRadius="full"
                                    >
                                        Xem tất cả
                                    </Button>
                                </Center>
                            </Container>
                        ))}
                </Container>
            </Container>
        </Container>
    );
};
