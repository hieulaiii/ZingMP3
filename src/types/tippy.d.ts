import { TippyProps } from '@tippyjs/react';
import { CSSProp } from 'styled-components';

declare module 'tippy.js' {
    interface TippyPropsNew<T> extends TippyProps<T> {
        tw?: string;
        css?: CSSProp;
    }
}