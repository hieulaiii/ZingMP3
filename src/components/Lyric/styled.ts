import tw, { styled } from 'twin.macro';

export const Span = styled.span<{ active: boolean }>`
    ${({ active }) => [
        tw`px-[50px] py-1 text-[15px] font-bold cursor-pointer rounded-full m-1 hover:bg-whiteAlpha-10`,
        active && tw`bg-whiteAlpha-10`,
    ]}
`;
