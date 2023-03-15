import React from 'react';

import { Col } from './Col/styled';
import { GridWrapper } from './styled';

export interface GridProps {
    children: React.ReactNode;
}

interface GridSubComponents {
    Col: React.FC<React.PropsWithChildren<{}>>;
}
export const Grid: React.FC<React.PropsWithChildren<GridProps>> & GridSubComponents = ({
    children,
    ...rest
}) => <GridWrapper {...rest}>{children}</GridWrapper>;

Grid.Col = Col;
