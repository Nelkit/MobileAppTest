import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Logo = () => {
    return (
      <View style={styles.logo}>
        <Image style={styles.image} source={require('./../../assets/images/icon.png')} />
      </View>
    );
}

const styles = StyleSheet.create({
  logo: {
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%'
  },
  image: {
    width: 100, 
    height: 100,
    overflow: 'hidden',
    borderRadius: 20,
  },
});

export default Logo;