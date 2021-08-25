import React, {useState} from 'react';
import {SafeAreaView, Image, StyleSheet, Text, ScrollView, ActivityIndicator, View} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import Col from './../../components/ui/col';
import Button from './../../components/ui/button';
import Row from './../../components/ui/row';
import Container from './../../components/ui/container';
import BatteryStatus from './../../components/layout/batteryStatus';
import NetworkStatus from './../../components/layout/networkStatus';
import {padding, colors} from './../../styles/base';
import Services from './../../services';

interface Props {
    route: any,
    navigation: any
}

const DisplayPicture = ({ route, navigation }: Props) => {
    const { photoUri } = route.params
    const [imaggaResponse, setImaggaResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    

    const postImaggaTag = async () => {
        setIsLoading(true)
        let fileBase64 = await FileSystem.readAsStringAsync(photoUri, { encoding: 'base64'  });
        var request = Services.postImaggaTag(fileBase64)
        request.then(response => {
            console.log("respuesta correcta")
            setImaggaResponse(`${JSON.stringify(response)}`)
            setIsLoading(false)
        }).catch(error => {
            console.log("error de respuesta")
            setIsLoading(false)
        })
 
    }

    const savePictureInGallery = () => {
        (async () => {
            const asset = await MediaLibrary.createAssetAsync(photoUri);
            console.log("Guardado en Galeria")
        })(); 

        postImaggaTag();
    }

    return(
        <SafeAreaView>
            <Container>
                <Row flex={1}>
                    <Col>
                        <BatteryStatus />
                    </Col> 
                    <Col paddingLeft={padding.sm}>
                        <NetworkStatus />
                    </Col> 
                </Row>
                <Row flex={4}>
                    <Col>
                        <Image  source={{uri: photoUri}} style={styles.box} />
                    </Col>
                </Row>
                <Row flex={4}>
                    <ScrollView>
                        {isLoading ? (
                            <View style={{width: '100%', height:100, flex: 1, justifyContent: "center", alignItems:'center'}}>
                                    <ActivityIndicator color="#0000f2" size="large" />
                                    <Text>Espera un momento...</Text>
                            </View>
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
    box: {
        flex: 1,
    },
});

export default DisplayPicture;