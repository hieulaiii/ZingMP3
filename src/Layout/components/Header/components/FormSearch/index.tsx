import React from 'react';

import tw from 'twin.macro';

import { Text } from '@/components/common/Element';
import { Icon } from '@/components/common/interaction';
import { Container, SongCard } from '@/components/common/Layout';

const Button = tw.button`text-textColor-placeholder px-2 pl-3 flex items-center justify-center rounded-l-full`;
const Input = tw.input`text-sm font-medium w-[95%] leading-[34px] 
text-textColor-primary placeholder:text-textColor-placeholder  rounded-r-full `;

export const FormSearch: React.FC = () => {
    const [isFocus, setIsFocus] = React.useState(false);
    return (
        <Container
            tw="w-[440px] h-10 bg-whiteAlpha-10 rounded-[20px] items-center relative"
            css={[isFocus && tw`rounded-b-[0px] bg-layout-primary`]}
        >
            <Button tw="">
                <Icon icon="ic-search" tw="text-xl flex items-center h-5" height={24} />
            </Button>
            <Input
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
            />
            {isFocus && (
                <Container tw="absolute w-full top-10 bg-layout-primary py-[13px] px-[10px] flex-col rounded-b-[20px]">
                    <Container tw="flex-col w-full border-b border-whiteAlpha-10 pb-2">
                        <Text tw="text-sm font-bold px-[10px] py-2">Đề xuất cho bạn</Text>
                        <ul tw="p-0 m-0 w-full">
                            <li
                                tw="px-[10px] py-2 flex gap-2 items-center 
                                hover:(bg-whiteAlpha-10) w-full rounded-md cursor-pointer"
                            >
                                <Icon icon="ic-trend" tw="text-whiteAlpha-50 pt-[2px]" />
                                <Text>ưng quá chùng</Text>
                            </li>
                            <li
                                tw="px-[10px] py-2 flex gap-2 items-center 
                                hover:bg-whiteAlpha-10 w-full rounded-md cursor-pointer"
                            >
                                <Icon icon="ic-trend" tw="text-whiteAlpha-50 pt-[2px]" />
                                <Text>ưng quá chùng</Text>
                            </li>
                        </ul>
                    </Container>
                    <Container tw="flex-col w-full ">
                        <Container tw="justify-between w-full ">
                            <Text tw="text-sm font-bold px-[10px] py-2">Tìm kiếm gần đây</Text>
                            <Text tw=" px-[10px] py-2 text-[10px] text-purple-primary">Xóa</Text>
                        </Container>
                        <Container tw="flex-col w-full ">
                            <Container tw="p-1 hover:bg-whiteAlpha-10 rounded">
                                <SongCard isSimple />
                            </Container>
                        </Container>
                    </Container>
                </Container>
            )}
        </Container>
    );
};
