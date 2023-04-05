import tw, { TwStyle } from 'twin.macro';

import { Span } from '@/components/common/Element';
import { Icon } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';

interface Props {
    rating: number;
    isColorRate?: boolean;
}

const colorRate: Record<number, TwStyle> = {
    0: tw`[-webkit-text-stroke: 1.5px var(--blue)]`,
    1: tw`[-webkit-text-stroke: 1.5px var(--green)]`,
    2: tw`[-webkit-text-stroke: 1.5px var(--red)]`,
};

export const StatusOnChart: React.FC<Props> = ({ rating, isColorRate = true, ...rest }) => (
    <Container tw="items-center [user-select: none] pr-[5px]" {...rest}>
        <Span
            tw="text-[32px] font-black whitespace-nowrap text-[#4a90e200] w-[60px] text-center 
        opacity-70 [-webkit-text-stroke: 1.5px var(--text-primary)]"
            css={[isColorRate && colorRate[rating]]}
        >
            {rating + 1}
        </Span>
        <Container tw="w-[18px] h-9 flex flex-col items-center justify-center text-textColor-primary text-sm">
            {/* <Icon icon="ic-up" tw="text-xs !text-green" />
            <Span tw="font-semibold">1</Span> */}
            <Icon icon="ic-balance" tw="text-xs !text-whiteAlpha-50" />
        </Container>
    </Container>
);
