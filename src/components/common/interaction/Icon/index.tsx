import React from 'react';
interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: string;
}
export const Icon: React.FC<IconProps> = ({ icon, ...props }) => (
    <span {...props} tw="text-base leading-none flex justify-center items-center">
        <i className={icon} />
    </span>
);
