import React from 'react';

import { useAtomValue } from 'jotai';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/order
import tw from 'twin.macro';

// eslint-disable-next-line import/no-unresolved

import { convertNumberToTime } from '@/common';
import { usePlaySong } from '@/lib/hook/song';
import { audioPlaying, songPlaying } from '@/lib/states';

import { TextCustom, TextCustomHover } from './styled';
import { SongCardProps } from './type';
import { Img, Text, VipLabel } from '../../Element';
import { ArtistItem, ButtonIcon, Icon, Popper } from '../../interaction';
import { Center } from '../Center';
import { Container } from '../Container';
import { ContextMenu } from '../ContextMenu';

export const SongCard: React.FC<SongCardProps> = ({ song, onHidden, onShow, customShow }) => {
    const { t } = useTranslation('common');
    const customShowDefault = {
        isAlbum: true,
        isKaraoke: true,
        isLike: true,
        isMore: true,
        isSongDuration: true,
        ...customShow,
    };

    const songPlayingValue = useAtomValue(songPlaying);
    const audioPlayingValue = useAtomValue(audioPlaying);
    const { handlePlaySong } = usePlaySong();

    return (
        <Container
            className="group"
            tw="items-center justify-between p-[10px] cursor-pointer w-full"
        >
            <Container tw="gap-[10px] w-1/2" css={[!customShowDefault.isAlbum && tw`w-auto`]}>
                <Container tw="relative w-10 h-10" onClick={() => handlePlaySong(song.encodeId)}>
                    <Img
                        src={
                            song?.thumbnail ||
                            `https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp
                            /cover/9/f/5/8/9f58cc8633750bb9a12bc153854a870a.jpg`
                        }
                        tw="rounded"
                    />
                    <Center
                        tw="absolute inset-0 bg-darkAlpha-50 hidden group-hover:flex"
                        css={[songPlayingValue?.encodeId === song.encodeId && tw`!flex`]}
                    >
                        {audioPlayingValue && songPlayingValue?.encodeId === song.encodeId ? (
                            <Img
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                tw="w-[18px] h-[18px] rounded-none"
                            />
                        ) : (
                            <Icon icon="ic-play" />
                        )}
                    </Center>
                </Container>
                <Container
                    tw="flex-col justify-start gap-[3px]"
                    css={[song.streamingStatus === 2 && tw`opacity-50`]}
                >
                    <Container tw="items-center gap-2">
                        <Text>{song?.title}</Text>
                        {song.streamingStatus === 2 && <VipLabel />}
                    </Container>
                    <Container tw="gap-1">
                        {song?.artists?.map((artist, index) => (
                            <ArtistItem artist={artist} key={artist.id}>
                                {`${artist.name}`}
                                {artist.spotlight && (
                                    <Icon icon="ic-star" size={10} tw="ml-[2px]" />
                                )}
                                {index !== song.artists.length - 1 ? ', ' : ''}
                            </ArtistItem>
                        ))}
                    </Container>
                </Container>
            </Container>
            {customShowDefault.isAlbum && (
                <TextCustomHover tw="hidden md:block flex-1">{song.album?.title}</TextCustomHover>
            )}
            <Container tw="w-32 justify-end">
                {customShowDefault.isSongDuration && (
                    <TextCustom className="duration-text" tw="group-hover:hidden block">
                        {convertNumberToTime(song.duration)}
                    </TextCustom>
                )}
                <Container className="song-action" tw="gap-2 items-center group-hover:flex hidden">
                    {customShowDefault.isKaraoke && (
                        <ButtonIcon
                            size="large"
                            icon="ic-karaoke"
                            content={t('play_along_with_the_lyrics')}
                            hover
                        />
                    )}
                    {customShowDefault.isLike && (
                        <ButtonIcon
                            size="large"
                            icon="ic-like"
                            content={t('add_to_library')}
                            hover
                            tw="hidden md:block"
                        />
                    )}
                    {customShowDefault.isMore && (
                        <Popper
                            content={<ContextMenu />}
                            placement="auto-start"
                            onHidden={onHidden}
                            onShow={onShow}
                        >
                            <ButtonIcon size="large" icon="ic-more" content={t('other')} hover />
                        </Popper>
                    )}
                </Container>
            </Container>
        </Container>
    );
};
