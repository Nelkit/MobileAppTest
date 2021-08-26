import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {colors, margin} from './../../styles/base';

type Props = {
    uri: string,
};

const Preview = ({uri}: Props) => {
    return (
        <Image  source={{uri: uri}} style={styles.previewBox} />
    )
}

const styles = StyleSheet.create({
    previewBox: {
		backgroundColor: colors.secondaryText,
        marginVertical: margin.sm,
		resizeMode: 'contain',
        flex: 1,
    },
});

export default Preview;