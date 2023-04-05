import React from 'react';
interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: string;
    width?: number;
    height?: number;
    size?: number | string;
    background?: string;
}
export const Icon: React.FC<IconProps> = ({ icon, width, height, size, background, ...props }) => (
    <span {...props} tw=" text-base leading-none flex justify-center items-center text-inherit">
        <i
            className={icon}
            style={{
                color: 'inherit',
                width: width,
                height: height,
                fontSize: size,
                background: background,
            }}
        />
    </span>
);
