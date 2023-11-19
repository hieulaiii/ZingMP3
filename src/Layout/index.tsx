import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router-dom';
import { SWRConfig } from 'swr';
import tw from 'twin.macro';

import { Container } from '@/components/common/Layout';
import { Lyric } from '@/components/Lyric';
import { openRightBar, songPlaying } from '@/lib/states';
import { openLyric } from '@/lib/states/lyric';

import { Audio, ControlPlayer, Header, RightBar, SideBar } from './components';

export const Layout: React.FC = () => {
    const openLyricValue = useAtomValue(openLyric);
    const songPlayingValue = useAtomValue(songPlaying);
    const openRightBarValue = useAtomValue(openRightBar);
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
            }}
        >
            <>
                <Container tw="flex-col h-screen justify-between">
                    <Container>
                        <Container tw="lg:w-[240px] w-[70px] shrink-0">
                            <SideBar />
                        </Container>
                        <Container tw="flex-col w-full h-[calc(100vh-90px)] overflow-y-auto">
                            <Header />
                            <Container tw="pt-[100px]">
                                <Outlet />
                            </Container>
                        </Container>
                        <Container
                            tw="w-0 duration-500"
                            css={[openRightBarValue && tw`w-[330px] shrink-0`]}
                        >
                            {openRightBarValue && <RightBar />}
                        </Container>
                    </Container>
                    <ControlPlayer />
                    <Audio />
                </Container>
                {openLyricValue && songPlayingValue && <Lyric idSong={songPlayingValue.encodeId} />}
            </>
        </SWRConfig>
    );
};
