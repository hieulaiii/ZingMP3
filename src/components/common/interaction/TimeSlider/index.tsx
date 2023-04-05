import React from 'react';

import tw from 'twin.macro';

import { useDragElement } from '@/lib/hook';

import { Container } from '../../Layout';

interface TimeSliderProps {
    valueSlide?: number;
    // eslint-disable-next-line no-unused-vars
    setValueSlide?: (valueNew: any) => void;
}

export const TimeSlider: React.FC<TimeSliderProps> = ({ valueSlide = 100, setValueSlide }) => {
    const refElement = React.useRef<HTMLDivElement>(null);
    const { x, width } = refElement.current?.getBoundingClientRect() || { x: 0, width: 0 };
    const { position, isDragging, onMouseDown } = useDragElement();
    const [value, setValue] = React.useState(0);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const positionNew = e.clientX - x;
        if (positionNew >= 0 && positionNew <= width) {
            const valueNew = Math.round((positionNew / width) * 100);
            valueNew !== value && setValue(valueNew);
            console.log(valueNew);
            setValueSlide && setValueSlide(valueNew / 100);
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

    React.useEffect(() => {
        setValue(valueSlide);
    }, [valueSlide]);
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
                            var(--progressBar-active-bg) 0%, 
                            var(--progressBar-active-bg) ${value}%, 
                            var(--progressBar-player-bg) ${value}%, 
                            var(--progressBar-player-bg) 100%)
                        `,
                }}
                onClick={handleClick}
            >
                <Container
                    style={{
                        transform: `translateY(-3.5px) translateX(${transform}px)`,
                    }}
                    onMouseDown={onMouseDown}
                    tw="w-3 h-3 rounded-full bg-layout-progressBar-active invisible group-hover:visible "
                    css={[isDragging && tw`visible`]}
                />
            </Container>
        </Container>
    );
};
