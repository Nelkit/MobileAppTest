import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';


interface Props {
    route: any,
    navigation: any
}

function LandingPage({ route, navigation }: Props) {
    return(
        <SafeAreaView>
            <TouchableHighlight onPress={() => navigation.push('TakePicture')}>
                <Text>Take New Picture</Text>
            </TouchableHighlight>
        </SafeAreaView>
    )
}

export default LandingPage;