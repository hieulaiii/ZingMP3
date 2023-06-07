/* eslint-disable indent */
import React from 'react';

import { useAtomValue } from 'jotai';
import tw, { styled } from 'twin.macro';

import { Container } from '@/components/common/Layout';
import { ILyricFormat } from '@/components/Lyric/type';
import { currentTime } from '@/lib/states';

const Span = styled.span<{ active: boolean }>`
    ${({ active }) => [
        tw`text-[40px] font-black text-whiteAlpha-50 duration-200 select-none`,
        active && tw`text-[45px] text-white`,
    ]}
`;

export const RunLyric: React.FC<{
    lyric: ILyricFormat[];
}> = ({ lyric }) => {
    const $ = document.querySelector.bind(document);
    const currentTimeValue = useAtomValue(currentTime);
    React.useEffect(() => {
        $('.activeLyric')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
        });
    }, [currentTimeValue]);
    return (
        <Container tw="flex-col gap-3 pl-20 py-8">
            {lyric.map((item, index) => (
                <Span
                    active={currentTimeValue >= item.start && currentTimeValue < item.end}
                    className={
                        currentTimeValue >= item.start && currentTimeValue < item.end
                            ? 'activeLyric'
                            : ''
                    }
                    style={
                        currentTimeValue >= item.start && currentTimeValue < item.end
                            ? {
                                  textShadow: '0 0 40px #fff, 0 0 70px #fff',
                              }
                            : ({} as any)
                    }
                    key={index}
                >
                    {item.text}
                </Span>
            ))}
        </Container>
    );
};
