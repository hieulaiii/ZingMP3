// eslint-disable-next-line import/no-unresolved
import { ISong } from 'types';

import { useNewRelease } from '@/lib/hook/chart';

import { Text } from '../common/Element';
import { Container, DynamicSongCard } from '../common/Layout';
import { StatusOnChart } from '../ZingChart/components/TopZing100/components';

export const NewMusic: React.FC = () => {
    const { newRelease } = useNewRelease();

    return (
        <Container tw="flex-col gap-10 w-full">
            <Container>
                <Text tw="text-[40px] font-bold">BXH Nhạc Mới</Text>
            </Container>
            <Container tw="flex-col w-full">
                {newRelease &&
                    newRelease.items.map((song, index) => (
                        <DynamicSongCard key={index} song={song as unknown as ISong}>
                            <DynamicSongCard.Action>
                                <StatusOnChart rating={index} />
                            </DynamicSongCard.Action>
                        </DynamicSongCard>
                    ))}
            </Container>
        </Container>
    );
};
