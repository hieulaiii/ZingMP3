import tw, { styled } from 'twin.macro';

interface WrapperProps {
    isHover?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ isHover = false }) => [
        tw`flex relative w-full rounded hover:bg-whiteAlpha-10 px-[10px] 
        before:(content-[''] absolute w-full h-[1px] bottom-0 bg-whiteAlpha-5 left-0 hover:bg-transparent)`,
        isHover &&
            tw`bg-whiteAlpha-10 before:(bg-transparent) [.song-action]:flex [.duration-text]:hidden`,
    ]}
`;
