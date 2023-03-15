import tw, { styled, TwStyle } from 'twin.macro';

import { ButtonIconProps } from './type';

export const sizes: Record<string, TwStyle> = {
    large: tw`w-10 h-10`,
    medium: tw`w-8 h-8`,
    small: tw`w-6 h-6`,
};

export const Button = styled.button<ButtonIconProps>`
    ${({ size = 'medium', hover = false, isBg = true }) => [
        tw`flex items-center justify-center w-10 h-10 rounded-full disabled:(cursor-not-allowed opacity-60)`,
        sizes[size],
        isBg && tw`bg-whiteAlpha-10`,
        hover && tw`bg-transparent hover:(!bg-whiteAlpha-10)`,
    ]}
`;
