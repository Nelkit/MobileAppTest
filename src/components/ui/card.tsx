import React from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
    children: JSX.Element|JSX.Element[],
    borderRadius?: number,
};

const Card = ({ borderRadius = 25, children }: Props) => {
    return <View style={[ styles.card, {borderRadius: borderRadius }]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 7,
    marginBottom: 7,
  },
});

export default Card;