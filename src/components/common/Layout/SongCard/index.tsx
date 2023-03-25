import React from 'react';

import { convertNumberToTime } from '@/common';
import { ISong } from '@/lib/interface';

//import { VipLabel } from './components';
import { TextCustom, TextCustomHover } from './styled';
import { Img, Text } from '../../Element';
import { ArtirsItem, ButtonIcon, Icon, Popper } from '../../interaction';
import { Center } from '../Center';
import { Container } from '../Container';
import { ContextMenu } from '../ContextMenu';

export interface SongCardProps {
    isSimple?: boolean;
    song: ISong;
    onShow?: () => void;
    onHidden?: () => void;
}

export const SongCard: React.FC<SongCardProps> = ({ isSimple = false, song, onHidden, onShow }) => (
    <Container className="group" tw="items-center justify-between p-[10px] cursor-pointer w-full">
        <Container tw="gap-[10px] w-1/2">
            <Container tw="relative w-10 h-10">
                <Img
                    src={
                        song?.thumbnail ||
                        `https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp
                        /cover/9/f/5/8/9f58cc8633750bb9a12bc153854a870a.jpg`
                    }
                    tw="rounded"
                />
                <Center tw="absolute inset-0 bg-darkAlpha-50 hidden group-hover:flex">
                    <Icon icon="ic-play" />
                    {/* <Img
                                src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                                tw="w-[18px] h-[18px] rounded-none"
                            /> */}
                </Center>
            </Container>
            <Container tw="flex-col justify-start gap-[3px]">
                <Container tw="items-center gap-2">
                    <Text>{song?.title}</Text>
                    {/* <VipLabel /> */}
                </Container>
                <Container>
                    {song?.artists?.map((artist, index) => (
                        <ArtirsItem artist={artist} key={artist.id}>
                            {`${artist.name}`}
                            {artist.spotlight && <Icon icon="ic-star" size={10} tw="ml-[2px]" />}
                            {index !== song.artists.length - 1 ? ', ' : ''}
                        </ArtirsItem>
                    ))}
                </Container>
            </Container>
        </Container>
        {!isSimple && (
            <TextCustomHover tw="hidden md:block flex-1">{song.album?.title}</TextCustomHover>
        )}
        <Container tw="w-32 justify-end">
            {!isSimple && (
                <TextCustom className="duration-text" tw="group-hover:hidden block">
                    {convertNumberToTime(song.duration)}
                </TextCustom>
            )}
            <Container className="song-action" tw="gap-2 items-center group-hover:flex hidden">
                {!isSimple && (
                    <ButtonIcon
                        size="large"
                        icon="ic-karaoke"
                        content="Phát cùng lời bài hát"
                        hover
                    />
                )}

                <ButtonIcon
                    size="large"
                    icon="ic-like"
                    content="Thêm vào thư viện"
                    hover
                    tw="hidden md:block"
                />
                <Popper
                    content={<ContextMenu />}
                    placement="auto-start"
                    onHidden={onHidden}
                    onShow={onShow}
                >
                    <ButtonIcon size="large" icon="ic-more" content="Khác" hover />
                </Popper>
            </Container>
        </Container>
    </Container>
);
