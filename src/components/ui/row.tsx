import React from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
    children: JSX.Element|JSX.Element[],
};

const Row = ({ children }: Props) => {
    return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
    row: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
    },
  });

export default Row;