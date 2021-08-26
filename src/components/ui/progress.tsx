import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from './../../styles/base';

const Progress = () => {
    return (
      	<View style={styles.loadingBox}>
          	<ActivityIndicator color={colors.primary} size="large" />
          	<Text>Wait a moment...</Text>
      	</View>
    )
}

const styles = StyleSheet.create({
	loadingBox: {
		width: '100%', 
		height:100, 
		flex: 1, 
		justifyContent: "center", 
		alignItems:'center'
	},
});

export default Progress;