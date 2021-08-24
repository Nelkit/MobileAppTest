import React, { useState } from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

type Props = {
    title: string,
    color: string,
    backgroundColor: string,
    disabledText?: string,
    disabled?: boolean,
    height?: number,
    paddingHorizontal?: number,
    fontSize?: number,
    uppercase?: boolean,
    borderRadius?: number,
    onPress: ()=>{}
};

const Button = ({ 
    title,
    color, 
    backgroundColor, 
    disabledText="", 
    disabled = false, 
    height = 50, 
    paddingHorizontal = 40, 
    fontSize = 20, 
    uppercase = true, 
    borderRadius = 25,
    onPress,
}: Props) => {
    const [isPress, setIsPress] = useState(false);

    return(
        <TouchableHighlight
            underlayColor= 'none'
            onHideUnderlay={() =>{
                setIsPress(false)
            }}
            onShowUnderlay={() =>{
                setIsPress(true)
            }}
            disabled={disabled}
            style = {isPress ? styles.btnPress : styles.btnNormal}
            activeOpacity={disabled ? 0.1 : 1}
            onPress={onPress}>
            <View style={[
                styles.button,
                {
                    backgroundColor: backgroundColor,
                    borderRadius: borderRadius,
                    height: height,
                    paddingHorizontal: paddingHorizontal,
                },
            ]}>
                <Text style={{color: color, fontSize: fontSize, textTransform: uppercase ? 'uppercase': 'none'}}>
                    {disabled ? disabledText : title}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent : 'center',
        flexDirection: 'row',
    },
    btnNormal: {
        transform: [{ scale: 1 }]
    },
    btnPress: {
        transform: [{ scale: 0.9 }]
    }    
});

export default Button;