import React from 'react';
import {Text} from 'react-native';
import {fonts, colors} from './../../styles/base';

type Props = {
    children: string,
    isBold?: Boolean,
    fontSize?: number,
    paddingTop?: number,
    paddingBottom?: number,
    color?: string,
};

const Label = ({ fontSize=fonts.sm, isBold=false, paddingTop=0, paddingBottom=0, color=colors.primaryText, children }: Props) => {
    return <Text style={{fontSize: fontSize, fontWeight: isBold ? 'bold' : 'normal', paddingTop: paddingTop, paddingBottom: paddingBottom, color: color}}>{children}</Text>;
}

export default Label;