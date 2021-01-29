import React from 'react';
import withFocusPath from 'dep';

declare function compose<R>(f1: (b: any) => R, ...funcs: Function[]): (...args: any[]) => R;

type Props = {
    ownProps: 'val';
};

class Boxshot extends React.Component<Props> {}

const enhance = compose(withFocusPath);
const FinalBoxshot = enhance(Boxshot);

export const Search = () => <FinalBoxshot ownProps={'val'} />
