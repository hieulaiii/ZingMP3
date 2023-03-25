import React from 'react';

import { BannerCarousel } from './components';
import { Container, ContextMenu, DynamicCard, Transition } from '../common/Layout';

export const Discover: React.FC = () => {
    const [show, setShow] = React.useState(false);

    return (
        <Container tw="flex-col w-full px-[60px]">
            <Container tw="w-full">
                <BannerCarousel />
            </Container>
            <h1>Discover</h1>
            <button onClick={() => setShow(!show)}>Click</button>
            <DynamicCard />
            <Transition isShow={show}>
                <ContextMenu />
            </Transition>
        </Container>
    );
};
