import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Col from './../../components/ui/col';
import Row from './../../components/ui/row';
import Button from '../../components/ui/button';
import Label from '../../components/ui/label';
import Container from './../../components/ui/container';
import BatteryStatus from './../../components/layout/batteryStatus';
import NetworkStatus from './../../components/layout/networkStatus';
import {colors, fonts, margin, padding} from './../../styles/base';


interface Props {
    route: any,
    navigation: any
}

const LandingPage = ({ route, navigation }: Props) => {
    const [hasPermission, setHasPermission] = useState(false);

    const provideAccess = () => {
        (async () => {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
			setHasPermission(status === 'granted');
		})(); 
    }

    const goToPictureGallery = () => {
        (async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                quality: 1,
            });
        
            if (!result.cancelled) {
                const {uri} = result;
                console.log();
                navigation.push('DisplayPicture', {photoUri: uri})
            }
        })(); 
    }

	useEffect(() => {
        provideAccess();
	}, []);

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
                <Row flex={2}>
                    <Col>                    
                        <Button 
                            title="Take new picture" 
                            color={colors.textIcons}  
                            backgroundColor={colors.primary} 
                            onPress={() => navigation.push('TakePicture')}
                        />
                        <View style={{marginTop: margin.sm}}>
                            {!hasPermission ?(
                                <View>                            
                                    <Label fontSize={14} paddingBottom={10}>No access to MediaLibrary</Label>
                                    <Button
                                        title="Provide Access to MediaLibrary"
                                        fontSize={fonts.sm}
                                        color={colors.textIcons}  
                                        backgroundColor={colors.primaryText} 
                                        onPress={provideAccess}
                                    />                                  
                                </View>
                            ):(
                                <Button
                                    disabled={!hasPermission} 
                                    title="Load Picture from Gallery"
                                    disabledText="Load Picture from Gallery" 
                                    color={colors.textIcons}  
                                    backgroundColor={colors.accent} 
                                    onPress={goToPictureGallery}
                                />
                            )}
                        </View>
                    </Col>
                </Row>
                <Row flex={5}>
                    
                </Row>
            </Container>
        </SafeAreaView>
    )
}

export default LandingPage;