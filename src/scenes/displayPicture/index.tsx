import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import Col from './../../components/ui/col';
import Button from './../../components/ui/button';
import Row from './../../components/ui/row';
import Progress from './../../components/ui/progress';
import Container from './../../components/ui/container';
import Preview from './../../components/ui/preview';
import BatteryStatus from './../../components/layout/batteryStatus';
import NetworkStatus from './../../components/layout/networkStatus';
import {padding, colors, margin} from './../../styles/base';
import Services from './../../services';
import Utils from './../../utils';

interface Props {
    route: any,
}

const DisplayPicture = ({ route }: Props) => {
    const { photoUri } = route.params
    const [imaggaResponse, setImaggaResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    

    const postImaggaTag = async () => {
        setIsLoading(true)
        let fileBase64 = await FileSystem.readAsStringAsync(photoUri, { encoding: 'base64'  });
        var request = Services.postImaggaTag(fileBase64)
        request.then(response => {
            setImaggaResponse(`${JSON.stringify(response)}`)
            setIsLoading(false)
        }).catch(error => {
            setIsLoading(false)
        })
 
    }

    const savePictureInGallery = () => {
        (async () => {
            const asset = await MediaLibrary.createAssetAsync(photoUri);
            Utils.sendLocalNotification("The current image is saved", "Saved image in gallery")
        })(); 

        postImaggaTag();
    }

    return(
        <SafeAreaView>
            <StatusBar style="dark" />
            <Container>
                <Row flex={1.2}>
                    <Col>
                        <BatteryStatus />
                    </Col> 
                    <Col paddingLeft={padding.sm}>
                        <NetworkStatus />
                    </Col> 
                </Row>
                <Row flex={4}>
                    <Col>
                        <Preview uri={photoUri} />  
                    </Col>
                </Row>
                <Row flex={4}>
                    <ScrollView style={styles.responseBox}>
                        {isLoading ? (
                            <Progress />
                        ):(
                            <Text>{imaggaResponse}</Text>
                        )}
                    </ScrollView>
                </Row>
                <Row flex={1}>
                    <Col>
                        <Button 
                            title="Save Picture to Gallery" 
                            paddingHorizontal={5}
                            color={colors.textIcons}  
                            backgroundColor={colors.primary} 
                            onPress={savePictureInGallery}
                        />
                    </Col>
                </Row>
            </Container>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    responseBox: {
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#eee',
        minHeight: 200,
        padding: padding.sm
    }
});

export default DisplayPicture;