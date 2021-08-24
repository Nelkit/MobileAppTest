import React from 'react';
import {View} from 'react-native';

type Props = {
    weight?: number,
    paddingLeft?: number,
    paddingTop?: number,
    children: JSX.Element,
};

const Col = ({ weight = 1, paddingLeft = 0, paddingTop=0, children }: Props) => {
    return <View style={{flex: weight, paddingLeft: paddingLeft, paddingTop: paddingTop}}>{children}</View>;
}

export default Col;