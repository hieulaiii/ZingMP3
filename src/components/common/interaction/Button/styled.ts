import tw, { styled, TwStyle } from 'twin.macro';

import { BorderRadius, ButtonSize, ButtonVariant } from './type';

export const sizes: Record<ButtonSize, TwStyle> = {
    large: tw``,
    medium: tw``,
    small: tw``,
};

export const variants: Record<ButtonVariant, TwStyle> = {
    primary: tw`text-white !bg-purple-primary`,
    secondary: tw`text-purple-primary !bg-whiteAlpha-10`,
    tertiary: tw`text-white`,
    outlined: tw`border border-white `,
    link: tw`border-none outline-0`,
};

export const rounded: Record<BorderRadius, TwStyle | string> = {
    full: tw`rounded-full`,
    md: tw`rounded-2xl`,
    none: '',
};

interface Props {
    size: ButtonSize;
    variant: ButtonVariant;
    borderRadius: BorderRadius;
    disabled: boolean;
}

export const Wrapper = styled.button<Props>`
    ${({ size, variant, borderRadius, disabled }) => [
        tw`flex items-center justify-center px-6 py-1 text-xs`,
        sizes[size],
        variants[variant],
        rounded[borderRadius],
        disabled && tw`cursor-not-allowed bg-whiteAlpha-15 text-whiteAlpha-15`,
    ]};
`;
