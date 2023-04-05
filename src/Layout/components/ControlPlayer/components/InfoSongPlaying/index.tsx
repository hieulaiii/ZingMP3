import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-unresolved
import * as i from 'types';

import { Img, Text } from '@/components/common/Element';
import { ButtonIcon, Popper } from '@/components/common/interaction';
import { Container, ContextMenu } from '@/components/common/Layout';
import { TextCustomHover } from '@/components/common/Layout/SongCard/styled';

interface InfoSongPlayingProps {
    song: i.ISong;
}
export const InfoSongPlaying: React.FC<InfoSongPlayingProps> = ({ song }) => {
    const { t } = useTranslation('common');
    return (
        <Container tw="items-center gap-x-[10px]">
            <Img src={song.thumbnail} tw="h-[64px] w-[64px] rounded" />
            <Container tw="flex-col justify-start gap-[3px] max-w-max">
                <Container tw="items-center gap-2">
                    <Text tw="font-bold drop-shadow-sidebarText">{song.title}</Text>
                </Container>
                <Container>
                    <TextCustomHover>Mr. Siro</TextCustomHover>
                </Container>
            </Container>
            <Container tw="gap-2">
                <ButtonIcon content={t('add_to_library')} icon="ic-like" hover />
                <Popper content={<ContextMenu />} placement="bottom-start">
                    <ButtonIcon content={t('see_more')} icon="ic-more" hover />
                </Popper>
            </Container>
        </Container>
    );
};
