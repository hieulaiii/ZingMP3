import React from 'react';

import { ButtonIcon } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';

import { PlayList } from './components';
import { Span } from './styled';

type TypeActiveStep = 'listPlay' | 'heardRecently';

export const RightBar: React.FC = () => {
    const [step, setStep] = React.useState<TypeActiveStep>('listPlay');
    return (
        <Container tw="w-full h-full flex-col border-l-[1px] border-whiteAlpha-10 py-4 gap-2">
            <Container tw="justify-around">
                <Container tw="bg-whiteAlpha-10 rounded-full">
                    <Span active={step === 'listPlay'} onClick={() => setStep('listPlay')}>
                        Danh sách phát
                    </Span>
                    <Span
                        active={step === 'heardRecently'}
                        onClick={() => setStep('heardRecently')}
                    >
                        Nghe gần đây
                    </Span>
                </Container>
                <ButtonIcon icon="ic-20-Clock" content="Hẹn giờ dừng phát nhạc" size="medium" />
                <ButtonIcon icon="ic-more" content="Khác" size="medium" />
            </Container>
            <Container tw="px-2 overflow-y-auto h-[calc(100vh - 150px)] overflow-x-hidden">
                <PlayList />
            </Container>
        </Container>
    );
};
