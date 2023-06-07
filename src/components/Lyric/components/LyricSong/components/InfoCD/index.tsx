import { useAtomValue } from 'jotai';
import tw, { styled } from 'twin.macro';

import { Img } from '@/components/common/Element';
import { Container } from '@/components/common/Layout';
import { audioPlaying, avgAnalyser, songPlaying } from '@/lib/states';

const CD = styled.div`
    ${() => [
        tw`absolute w-[400px] h-[400px] rounded-full bg-white border-4 left-1/2 z-[1]
        border-white bg-cover flex items-center justify-center`,
    ]}
`;
export const InfoCD: React.FC = () => {
    const avgAnalyserValue = useAtomValue(avgAnalyser);
    const audioPlayingValue = useAtomValue(audioPlaying);
    const songPlayingValue = useAtomValue(songPlaying);
    const urImage = songPlayingValue?.thumbnailM?.replace('w240', 'w480');
    return (
        <Container tw="items-center relative z-[2]">
            <Img
                tw="max-w-[400px] h-[500px] rounded object-cover relative z-[2]"
                src={urImage}
                alt=""
            />
            <CD
                style={{
                    transform: 'scale(' + (0.8 + avgAnalyserValue / 500) + ')',
                }}
            >
                <Container
                    tw="w-full h-full rounded-full items-center justify-center bg-cover"
                    css={[audioPlayingValue && tw`animate-spin`]}
                    style={{
                        backgroundImage: `url("${urImage}")`,
                    }}
                >
                    <Container tw="bg-black bg-opacity-50 rounded-full w-20 h-20 items-center justify-center">
                        <Container tw="bg-white rounded-full w-10 h-10  " />
                    </Container>
                </Container>
            </CD>
        </Container>
    );
};
