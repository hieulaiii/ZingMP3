import React from 'react';

export const useDragElement = () => {
    const [isDragging, setIsDragging] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        function handleMouseMove(event: any) {
            if (isDragging) {
                setPosition({ x: event.clientX, y: event.clientY });
            }
        }
        function handleMouseUp() {
            setIsDragging(false);
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    function handleMouseDown(event: any) {
        event.preventDefault();
        setIsDragging(true);
    }

    return {
        position,
        isDragging,
        onMouseDown: handleMouseDown,
    };
};
