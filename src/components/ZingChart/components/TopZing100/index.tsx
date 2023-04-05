import React from 'react';

import { Button } from '@/components/common/interaction';
import { Center, Container, DynamicSongCard } from '@/components/common/Layout';
import { useChart } from '@/lib/hook/chart';
import { ISong } from '@/lib/interface';

import { StatusOnChart } from './components';

export const TopZing100: React.FC = () => {
    const { chart } = useChart();

    const TopSong100 = chart?.RTChart.items;
    const [renderSong, setRenderSong] = React.useState<number>(10);
    return (
        <Container tw="flex-col w-full">
            {TopSong100 &&
                TopSong100.map(
                    (song, index) =>
                        index < renderSong && (
                            <DynamicSongCard key={index} song={song as unknown as ISong}>
                                <DynamicSongCard.Action>
                                    <StatusOnChart rating={index} />
                                </DynamicSongCard.Action>
                            </DynamicSongCard>
                        )
                )}
            {renderSong === 10 && (
                <Center tw="p-6">
                    <Button
                        variant="outlined"
                        tw="py-2 text-sm font-semibold hover:bg-whiteAlpha-10"
                        borderRadius="full"
                        onClick={() => setRenderSong((TopSong100 && TopSong100.length) || 10)}
                    >
                        Xem Top 100
                    </Button>
                </Center>
            )}
        </Container>
    );
};
