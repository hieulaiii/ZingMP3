import Tippy from '@tippyjs/react';

import { Container } from '../../Layout';

export interface PopperProps {
    children: React.ReactNode;
    content: React.ReactNode;
    placement?:
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
    onShow?: () => void;
    onHidden?: () => void;
}

export const Popper: React.FC<React.PropsWithChildren<PopperProps>> = ({
    children,
    content,
    placement = 'auto',
    onShow,
    onHidden,
    ...rest
}) => (
    <Tippy
        content={content}
        placement={placement}
        trigger="click"
        arrow={false}
        tw="[.tippy-content]:p-0"
        interactive
        onHide={onHidden}
        onShow={onShow}
    >
        <Container {...rest}>{children}</Container>
    </Tippy>
);
