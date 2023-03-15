import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
    body{
        ${tw`bg-layout-main text-textColor-primary m-0 p-0 text-sm 
        leading-[1.5] overflow-hidden overscroll-none font-main`}
    }
`;

export const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomStyles />
    </>
);
