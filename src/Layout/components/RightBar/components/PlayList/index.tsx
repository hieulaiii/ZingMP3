import { useAtomValue } from 'jotai';

import { Container, DynamicSongCard } from '@/components/common/Layout';
import { useSongsRecommend } from '@/lib/hook/song';
import { songPlaying } from '@/lib/states';

export const PlayList: React.FC = () => {
    const songPlayingValue = useAtomValue(songPlaying);
    const { songsRecommend } = useSongsRecommend(songPlayingValue?.encodeId || '');
    return (
        <Container tw="flex-col h-full w-full ml-1">
            {songsRecommend &&
                songsRecommend.items?.map((song, index) => (
                    <DynamicSongCard
                        tw="px-0"
                        key={index}
                        song={song}
                        sizeIcon="medium"
                        isShowIcon={true}
                        customShow={{
                            isAlbum: false,
                            isKaraoke: false,
                            isSongDuration: false,
                            isShortTitle: true,
                            isLike: false,
                            isShowAddPlaylist: true,
                        }}
                    />
                ))}
        </Container>
    );
};
