import React from 'react';

import { useDragElement } from '@/lib/hook';

import { Container } from '../../Layout';
import tw from 'twin.macro';

interface TimeSliderProps {
    defaultValue?: number;
}

export const TimeSlider: React.FC<TimeSliderProps> = ({ defaultValue = 100 }) => {
    const refElement = React.useRef<HTMLDivElement>(null);
    const { x, width } = refElement.current?.getBoundingClientRect() || { x: 0, width: 0 };
    const { position, isDragging, onMouseDown } = useDragElement();
    const [value, setValue] = React.useState(defaultValue);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const positionNew = e.clientX - x;
        if (positionNew >= 0 && positionNew <= width) {
            const valueNew = Math.round((positionNew / width) * 100);
            valueNew !== value && setValue(valueNew);
        }
    };

    React.useEffect(() => {
        if (isDragging) {
            const positionNew = position.x - x;
            if (positionNew >= 0 && positionNew <= width) {
                const valueNew = Math.round((positionNew / width) * 100);
                valueNew !== value && setValue(valueNew);
            }
        }
    }, [position.x, x, width, isDragging]);
    const transform = (value / 100) * width - 6;
    return (
        <Container
            ref={refElement}
            tw="justify-center w-full h-[15px] cursor-pointer"
            className="group"
        >
            <Container
                tw="h-[3px] group-hover:h-[4px] w-full rounded-[4px] self-center"
                style={{
                    background: `linear-gradient(to right, 
                            var(--progressbar-active-bg) 0%, 
                            var(--progressbar-active-bg) ${value}%, 
                            var(--progressbar-player-bg) ${value}%, 
                            var(--progressbar-player-bg) 100%)
                        `,
                }}
                onClick={handleClick}
            >
                <Container
                    style={{
                        transform: `translateY(-3.5px) translateX(${transform}px)`,
                    }}
                    onMouseDown={onMouseDown}
                    tw="w-3 h-3 rounded-full bg-layout-progressbar-active invisible group-hover:visible "
                    css={[isDragging && tw`visible`]}
                />
            </Container>
        </Container>
    );
};
