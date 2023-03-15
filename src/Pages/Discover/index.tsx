import { Container, ContextMenu, DynamicCard } from '@/components/common/Layout';

export const Discover: React.FC = () => (
    <Container tw="flex items-center flex-col w-full">
        <h1>Discover</h1>
        <DynamicCard />
        <ContextMenu />
    </Container>
);
