import { useEffect, useState } from 'react';

export const useScreen = (breakpoint: number) => {
    const [isScreen, setIsScreen] = useState(window.innerWidth < breakpoint);

    const handleResize = () => {
        setIsScreen(window.innerWidth < breakpoint);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isScreen;
};

export const useMobileScreen = () => useScreen(768);

export const useTabletScreen = () => useScreen(1024);

export const useDesktopScreen = () => useScreen(1280);
