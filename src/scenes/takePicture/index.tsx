import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

interface Props {
    route: any,
    navigation: any
}

const TakePicture = ({ route, navigation }: Props) => {
    return(
        <SafeAreaView>
            <TouchableHighlight onPress={() => navigation.goBack()}>
                <Text>Go back</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )
}

export default TakePicture;