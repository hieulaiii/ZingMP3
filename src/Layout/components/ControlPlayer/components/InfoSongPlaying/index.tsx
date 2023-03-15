import { useTranslation } from 'react-i18next';

import { Img, Text } from '@/components/common/Element';
import { ButtonIcon } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';
import { TextCustomHover } from '@/components/common/Layout/SongCard/styled';

export const InfoSongPlaying: React.FC = () => {
    const { t } = useTranslation('common');
    return (
        <Container tw="items-center gap-x-[10px]">
            <Img
                src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/7/e/c/87ec2fc954a8087a8a62346308e17b44.jpg"
                tw="h-[64px] w-[64px] rounded"
            />
            <Container tw="flex-col justify-start gap-[3px] max-w-max">
                <Container tw="items-center gap-2">
                    <Text tw="font-bold drop-shadow-sidebarText">Người Như Chúng Ta</Text>
                </Container>
                <Container>
                    <TextCustomHover>Mr. Siro</TextCustomHover>
                </Container>
            </Container>
            <Container tw="gap-2">
                <ButtonIcon content={t('add_to_library')} icon="ic-like" hover />
                <ButtonIcon content={t('see_more')} icon="ic-more" hover />
            </Container>
        </Container>
    );
};
