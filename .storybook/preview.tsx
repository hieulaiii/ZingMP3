import React from 'react';
import 'styled-components';
import 'twin.macro';
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
