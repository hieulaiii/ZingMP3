import { Container } from '@/components/common/Layout';

import { ControlPlayer, Header, SideBar } from './components';

export const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <Container tw="flex-col h-screen justify-between">
        <Container>
            <Container tw="w-[240px] flex-shrink-0">
                <SideBar />
            </Container>
            <Container tw="flex-col w-full">
                <Header />
                {children}
            </Container>
        </Container>
        <ControlPlayer />
    </Container>
);
