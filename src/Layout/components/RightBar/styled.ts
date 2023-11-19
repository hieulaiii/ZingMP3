import tw, { styled } from 'twin.macro';

export const Span = styled.span<{ active: boolean }>`
    ${({ active }) => [
        tw`w-[100px] text-center py-1 m-1 text-xs font-medium rounded-full cursor-pointer hover:bg-whiteAlpha-10`,
        active && tw`bg-whiteAlpha-10`,
    ]}
`;
