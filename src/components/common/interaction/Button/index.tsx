import { Wrapper } from './styled';
import { BorderRadius, ButtonSize, ButtonVariant } from './type';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant: ButtonVariant;
    borderRadius?: BorderRadius;
    loading?: boolean;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    size = 'medium',
    variant,
    onClick,
    borderRadius = 'none',
    type = 'button',
    loading,
    disabled,
    ...props
}) => (
    <Wrapper
        disabled={!!disabled || !!loading}
        {...{ size, variant, borderRadius, onClick, type }}
        {...props}
    >
        {children}
    </Wrapper>
);
