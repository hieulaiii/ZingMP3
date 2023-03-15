import tw from 'twin.macro';

import { Img, Text } from '@/components/common/Element';
import { Container } from '@/components/common/Layout';

import { SiteMaps } from '../../type';

interface SiteItemProps extends SiteMaps {
    active?: boolean;
}

export const SiteItem: React.FC<SiteItemProps> = ({ icon, text, click, active, isShowLive }) => (
    <Container
        className="group"
        tw="border-l-[3px] border-transparent py-2 px-6 gap-x-[10px] 
        flex items-center justify-start
        text-textColor-navigation cursor-pointer hover:text-white"
        onClick={click}
        css={[active && tw`text-white border-purple-primary bg-whiteAlpha-10`]}
    >
        {icon}
        <Text
            tw="font-bold text-textColor-navigation 
            group-hover:text-white text-[13px] drop-shadow-sidebarText"
            css={[active && tw`text-white`]}
        >
            {text}
        </Text>
        {isShowLive && (
            <Img
                src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg"
                tw="h-4 w-[34px] rounded-sm"
            />
        )}
    </Container>
);
