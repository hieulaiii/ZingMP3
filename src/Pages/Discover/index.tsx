import React from 'react';

import { Container } from '@/components/common/Layout';
import { Discover } from '@/components/Discover';

export const DiscoverPage: React.FC = () => (
    <Container tw="flex items-center flex-col w-full">
        <Discover />
    </Container>
);
