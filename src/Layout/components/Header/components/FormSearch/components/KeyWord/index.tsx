import { Text } from '@/components/common/Element';
import { Icon } from '@/components/common/interaction';

export const KeyWord: React.FC<{ keyword: string; icon: string }> = ({ keyword, icon }) => (
    <li
        tw="px-[10px] py-2 flex gap-2 items-center 
hover:(bg-whiteAlpha-10) w-full rounded-md cursor-pointer"
    >
        <Icon icon={icon} tw="text-whiteAlpha-50 pt-[2px]" />
        <Text>{keyword}</Text>
    </li>
);
