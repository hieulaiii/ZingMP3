import Tippy from '@tippyjs/react';
import tw from 'twin.macro';

import { IArtists } from '@/lib/interface';

import { Span } from '../../Element';
import { ArtistSummary } from '../../Layout';

interface ArtistItemProps {
    content?: React.ReactNode;
    placement?:
        | 'top'
        | 'bottom'
        | 'right'
        | 'left'
        | 'top-start'
        | 'top-end'
        | 'bottom-start'
        | 'bottom-end'
        | 'right-start'
        | 'right-end'
        | 'left-start'
        | 'left-end'
        | 'auto'
        | 'auto-start'
        | 'auto-end';
    artist: IArtists;
}

const ArtistLabel = tw(
    Span
)`text-whiteAlpha-50 text-xs font-medium cursor-pointer hover:(underline text-textColor-linkHover) flex truncate    `;

export const ArtistItem: React.FC<React.PropsWithChildren<ArtistItemProps>> = ({
    children,
    artist,
    placement = 'bottom',
    content,
    ...rest
}) => (
    <Tippy
        content={content || <ArtistSummary artist={artist} />}
        placement={placement}
        arrow={false}
        tw="[.tippy-content]:p-0"
        interactive
        delay={[1000, 0]}
    >
        <ArtistLabel {...rest}>{children}</ArtistLabel>
    </Tippy>
);
