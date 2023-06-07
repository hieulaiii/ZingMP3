import React from 'react';

import tw from 'twin.macro';

import { Text } from '@/components/common/Element';
import { Icon } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';
import { useSearchKeyword, useSearchSuggestions } from '@/lib/hook/search';
import { useDebounce } from '@/lib/hook/use-debounce';

import { KeyWord, SongCard } from './components';

const Button = tw.button`text-textColor-placeholder px-2 pl-3 flex items-center justify-center rounded-l-full`;
const Input = tw.input`text-sm font-medium w-[95%] leading-[34px] 
text-textColor-primary placeholder:text-textColor-placeholder  rounded-r-full `;

export const FormSearch: React.FC = () => {
    const [isFocus, setIsFocus] = React.useState(false);
    const { searchKeyword } = useSearchKeyword();

    const [searchValue, setSearchValue] = React.useState<string>('');
    const deBounceValue = useDebounce<string>(searchValue, 500);
    const { searchSuggestions } = useSearchSuggestions(deBounceValue);
    const keyWords = searchValue ? searchSuggestions?.items[0]?.keywords : searchKeyword;
    React.useEffect(() => {
        window.onclick = () => setIsFocus(false);
    }, []);
    return (
        <Container
            tw="w-[440px] h-10 items-center relative flex-col"
            css={[isFocus && tw`rounded-b-[0px] bg-layout-primary rounded-t-[20px]`]}
        >
            <Container
                tw="absolute w-full h-fit top-0 flex-col rounded-[20px] z-10"
                onFocus={() => setIsFocus(true)}
                onClick={(e) => e.stopPropagation()}
            >
                <Container
                    tw="w-full h-10 bg-whiteAlpha-10 rounded-[20px] "
                    css={[isFocus && tw`bg-transparent`]}
                >
                    <Button tw="">
                        <Icon icon="ic-search" tw="text-xl flex items-center h-5" height={24} />
                    </Button>
                    <Input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    />
                </Container>
                {isFocus && (
                    <Container tw="flex-col w-full bg-layout-primary pb-[13px] px-[10px] rounded-b-[20px]">
                        <Container tw="flex-col w-full">
                            <Text tw="text-sm font-bold px-[10px] py-2">
                                {searchValue ? 'Từ khóa liên quan' : 'Đề xuất cho bạn'}
                            </Text>
                            <ul tw="p-0 m-0 w-full">
                                {keyWords?.map((item, index) => (
                                    <KeyWord
                                        key={index}
                                        keyword={item.keyword}
                                        icon={searchValue ? 'ic-search' : 'ic-trend'}
                                    />
                                ))}
                            </ul>
                        </Container>
                        {searchSuggestions?.items[1]?.suggestions && (
                            <Container tw="flex-col w-full border-t border-whiteAlpha-10 pt-2">
                                <Container tw="justify-between w-full ">
                                    <Text tw="text-sm font-bold px-[10px] py-2">Gợi ý kết quả</Text>
                                    <Text tw=" px-[10px] py-2 text-[10px] text-purple-primary">
                                        Xóa
                                    </Text>
                                </Container>
                                <Container tw="flex-col w-full ">
                                    {searchSuggestions?.items[1]?.suggestions.map((item, index) => (
                                        <Container
                                            tw="p-1 hover:bg-whiteAlpha-10 rounded"
                                            key={index}
                                        >
                                            <SongCard song={item} />
                                        </Container>
                                    ))}
                                </Container>
                            </Container>
                        )}
                    </Container>
                )}
            </Container>
        </Container>
    );
};
