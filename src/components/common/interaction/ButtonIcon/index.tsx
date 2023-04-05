import Tippy, { TippyProps } from '@tippyjs/react';

import { Span } from '@/components/common/Element';

import { Button } from './styled';
import { ButtonSize } from './type';
import { Icon } from '../Icon';

import 'tippy.js/dist/tippy.css';
// eslint-disable-next-line import/order
import { TwStyle } from 'twin.macro';

interface ButtonIconProps {
    icon: string;
    content: string | React.ReactNode;
    tippyProps?: TippyProps;
    size?: ButtonSize;
    hover?: boolean;
    fontSize?: number;
    isBg?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    css?: TwStyle;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
    icon,
    content,
    tippyProps,
    fontSize,
    disabled = false,
    onClick,
    css,
    ...props
}) => (
    <Tippy
        content={
            typeof content === 'string' ? (
                <Span tw="text-[11px] tracking-tight">{content}</Span>
            ) : (
                <>{content}</>
            )
        }
        {...tippyProps}
    >
        <Button {...props} disabled={disabled} onClick={onClick} css={css}>
            <Icon icon={icon} size={fontSize} />
        </Button>
    </Tippy>
);
