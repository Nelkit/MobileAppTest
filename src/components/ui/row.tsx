import React from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
    children: JSX.Element|JSX.Element[],
    flex?: number,
};

const Row = ({ flex=1, children }: Props) => {
    return <View style={[styles.row, {flex: flex}]}>{children}</View>;
}

const styles = StyleSheet.create({
    row: {
      	display:'flex',
      	justifyContent: 'flex-start',
      	flexDirection:'row',
      	alignItems:'center',
    },
  });

export default Row;