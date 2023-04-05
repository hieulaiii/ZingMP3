import { useSetAtom } from 'jotai';
import { useTranslation } from 'react-i18next';

import { ButtonIcon, TimeSlider } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';
import { volume } from '@/lib/states';

export const ActionMore: React.FC = () => {
    const { t } = useTranslation('common');
    const setVolume = useSetAtom(volume);
    return (
        <Container tw="justify-end w-full gap-[10px] items-center">
            <ButtonIcon content={t('see_mv')} icon="ic-mv" hover disabled />
            <ButtonIcon content={t('see_lyric')} icon="ic-karaoke" hover />
            <ButtonIcon content={t('window_mode')} icon="ic-restore" hover />
            <ButtonIcon content={t('volumn')} icon="ic-volume" hover />
            <Container tw="w-[70px]">
                <TimeSlider setValueSlide={setVolume} />
            </Container>
            <Container tw="h-[33px] w-[1px] bg-whiteAlpha-10 mx-[10px]" />
            <ButtonIcon content={t('play_list')} icon="ic-list-music" tw="rounded-md" />
        </Container>
    );
};
