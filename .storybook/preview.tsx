import React from 'react';

import { GlobalStyles } from '../src/lib/Provider/GlobalStyle';

const ThemeWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    );
};

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
