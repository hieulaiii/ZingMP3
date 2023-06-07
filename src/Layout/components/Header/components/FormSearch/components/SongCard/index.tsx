import React from 'react';

import { useAtomValue } from 'jotai';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/order
import tw from 'twin.macro';

// eslint-disable-next-line import/no-unresolved

import { Img, Text, VipLabel } from '@/components/common/Element';
import { ButtonIcon, Icon, Popper } from '@/components/common/interaction';
import { Center, Container, ContextMenu } from '@/components/common/Layout';
import { usePlaySong } from '@/lib/hook/song';
import { audioPlaying, songPlaying } from '@/lib/states';

import { SongCardProps } from './type';

export const SongCard: React.FC<SongCardProps> = ({ song, onHidden, onShow }) => {
    const { t } = useTranslation('common');
    const songPlayingValue = useAtomValue(songPlaying);
    const audioPlayingValue = useAtomValue(audioPlaying);
    const { handlePlaySong } = usePlaySong();

    return (
        <Container
            className="group"
            tw="items-center justify-between p-[10px] cursor-pointer w-full"
        >
            <Container tw="gap-[10px] w-auto">
                <Container tw="relative w-10 h-10" onClick={() => handlePlaySong(song.id)}>
                    <Img
                        src={
                            song?.thumb ||
                            `https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp
                            /cover/9/f/5/8/9f58cc8633750bb9a12bc153854a870a.jpg`
                        }
                        tw="rounded"
                    />
                    <Center tw="absolute inset-0 bg-darkAlpha-50 hidden group-hover:flex">
                        {audioPlayingValue && songPlayingValue?.encodeId === song.id ? (
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
                    css={[song.status === 2 && tw`opacity-50`]}
                >
                    <Container tw="items-center gap-2">
                        <Text>{song?.title}</Text>
                        {song.status === 2 && <VipLabel />}
                    </Container>
                    <Container>
                        {song?.artists?.map((artist, index) => (
                            <Text key={index}>
                                {artist.name}
                                {index !== song.artists.length - 1 ? ', ' : ''}
                            </Text>
                        ))}
                    </Container>
                </Container>
            </Container>
            <Container tw="w-32 justify-end">
                <Container className="song-action" tw="gap-2 items-center group-hover:flex hidden">
                    <ButtonIcon
                        size="large"
                        icon="ic-like"
                        content={t('add_to_library')}
                        hover
                        tw="hidden md:block"
                    />
                    <Popper
                        content={<ContextMenu />}
                        placement="auto-start"
                        onHidden={onHidden}
                        onShow={onShow}
                    >
                        <ButtonIcon size="large" icon="ic-more" content={t('other')} hover />
                    </Popper>
                </Container>
            </Container>
        </Container>
    );
};
