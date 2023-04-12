import { Outlet } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { Container } from '@/components/common/Layout';

import { Audio, ControlPlayer, Header, SideBar } from './components';

export const Layout: React.FC = () => (
    <SWRConfig
        value={{
            revalidateOnFocus: false,
        }}
    >
        <Container tw="flex-col h-screen justify-between">
            <Container>
                <Container tw="w-[240px] shrink-0">
                    <SideBar />
                </Container>
                <Container tw="flex-col w-full h-[calc(100vh-90px)] overflow-auto">
                    <Header />
                    <Container tw="pt-[100px]">
                        <Outlet />
                    </Container>
                </Container>
            </Container>
            <ControlPlayer />
            <Audio />
        </Container>
    </SWRConfig>
);
