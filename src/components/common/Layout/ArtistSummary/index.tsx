import { IArtists } from '@/lib/interface';

import { LatestProduct } from './components';
import { Img, Span } from '../../Element';
import { Button, Icon } from '../../interaction';
import { Container } from '../Container';

interface ArtistSummaryProps {
    artist: IArtists;
}

export const ArtistSummary: React.FC<ArtistSummaryProps> = ({ artist }) => {
    console.log(artist);
    return (
        <Container tw="p-4 w-[360px] bg-[#34224f] rounded flex-col gap-4 relative">
            <Container tw="w-full items-center justify-between">
                <Container tw="gap-2">
                    <Img src={artist.thumbnail} tw="rounded-full w-[50px] h-[50px]" />
                    <Container tw="flex-col justify-center">
                        <Span tw="font-black">{artist.name}</Span>
                        <Span tw="text-whiteAlpha-50 text-xs font-medium">
                            {artist.totalFollow} quan tâm
                        </Span>
                    </Container>
                </Container>
                <Button
                    variant="outlined"
                    borderRadius="full"
                    tw="!border-whiteAlpha-10 gap-2 !bg-whiteAlpha-5 px-4"
                >
                    <Icon icon="ic-addfriend" size={10} />
                    <Span tw="uppercase">Quan tâm</Span>
                </Button>
            </Container>
            <div tw="text-xs max-h-[37px]">
                <Span>Là ca sĩ dòng nhạc Pop được khán giả yêu thích nhờ</Span>
                <Span>Là ca sĩ dòng nhạc Pop được khán giả yêu thích nhờ</Span>
            </div>
            <Container tw="flex-col gap-2">
                <Span tw="text-sm font-bold">Giải thưởng</Span>
                <Container tw="gap-4">
                    <Icon
                        icon="ic-zing-choice"
                        width={43}
                        height={33}
                        background="url(https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.14/static/media/zing-choice.3af580a0.svg)"
                    />
                    <Icon
                        icon="ic-zma"
                        width={33}
                        height={33}
                        background="url(https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.14/static/media/zma.ea944b51.svg) 50%/cover no-repeat"
                    />
                </Container>
            </Container>
            <Container tw="flex-col gap-2">
                <Span tw="text-sm font-bold">Mới nhất</Span>
                <Container tw="gap-2">
                    {[1, 2, 3, 4].map((_) => (
                        <LatestProduct />
                    ))}
                </Container>
            </Container>
        </Container>
    );
};
