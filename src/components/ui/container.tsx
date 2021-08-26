import React from 'react';
import {View} from 'react-native';
import {padding} from './../../styles/base';

type Props = {
    paddingTop?: number,
    paddingLeft?: number,
    paddingRight?: number,
    paddingBottom?: number,
    children: JSX.Element|JSX.Element[],
};

const Container = ({
    paddingTop = padding.sm, 
    paddingLeft = padding.sm, 
    paddingRight = padding.sm, 
    paddingBottom = padding.sm, 
    children 
}: Props) => {
    return (
        <View 
            style={{
                paddingTop: paddingTop, 
                paddingLeft: paddingLeft, 
                paddingRight: paddingRight, 
                paddingBottom: paddingBottom, 
                height: '100%',
                width: '100%',
            }}
        >{children}</View>
    );
}

export default Container;