import Tippy from '@tippyjs/react';

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
    >
        <Span
            tw="text-whiteAlpha-50 text-xs font-medium cursor-pointer hover:(underline text-textColor-linkHover) flex"
            {...rest}
        >
            {children}
        </Span>
    </Tippy>
);