import { Text } from '@/components/common/Element';
import { Container } from '@/components/common/Layout';

interface SideBarCardProps {
    text: string;
    button: React.ReactNode;
}

export const SideBarCard: React.FC<SideBarCardProps> = ({ text, button, ...props }) => (
    <Container
        tw="mx-5 bg-purple-primary gap-y-[10px] 
        flex-col justify-center rounded-md px-2 py-[15px] items-center"
        {...props}
    >
        <Text tw="text-xs font-semibold text-center px-2 drop-shadow-sidebarText">{text}</Text>
        {button}
    </Container>
);
