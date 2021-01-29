import { ComponentType } from 'react';

declare module 'dep' {
    export default function withFocusPath<P = any>(
        Component: ComponentType<P>
    ): ComponentType<P & {
        focusKey: 'focusKey';
    }>;
}
