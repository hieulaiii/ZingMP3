import React from 'react';

import tw from 'twin.macro';

import { Container } from '../Container';

interface Props {
    time?: number;
    isShow: boolean;
}

export const Transition: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    time = 3000,
    isShow,
}) => {
    const [show, setShow] = React.useState(false);
    const element = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (!isShow) {
            timeout = setTimeout(() => {
                setShow(isShow);
            }, time);
        } else {
            setShow(isShow);
        }
        return () => clearTimeout(timeout);
    }, [isShow, time]);
    return (
        <Container ref={element} css={[show ? tw`!flex` : tw`!hidden`]}>
            {children}
        </Container>
    );
};
