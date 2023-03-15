import React from 'react';

export const StateContext = React.createContext({} as any);

export const StateProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [state, setState] = React.useState({} as any);

    return <StateContext.Provider value={[state, setState]}>{children}</StateContext.Provider>;
};
