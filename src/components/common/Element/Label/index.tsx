import tw from 'twin.macro';

import { LabelWrapper } from './styled';

interface LabelProps {
    text: string;
    active?: boolean;
}

export const Label: React.FC<LabelProps> = ({ text, active = false, ...props }) => (
    <LabelWrapper
        css={[active && tw`text-white bg-purple-primary border-purple-primary`]}
        {...props}
    >
        {text}
    </LabelWrapper>
);
