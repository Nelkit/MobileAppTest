import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, AppState} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import * as Notifications from 'expo-notifications';
import Col from './../../components/ui/col';
import Row from './../../components/ui/row';
import Button from '../../components/ui/button';
import Label from '../../components/ui/label';
import Container from './../../components/ui/container';
import BatteryStatus from './../../components/layout/batteryStatus';
import NetworkStatus from './../../components/layout/networkStatus';
import Logo from './../../components/layout/logo';
import Utils from './../../utils';
import {colors, fonts, margin, padding} from './../../styles/base';


interface Props {
    route: any,
    navigation: any
}

const LandingPage = ({ route, navigation }: Props) => {
    const [mediaLibraryPermission, setMediaLibraryPermission] = useState(false);
    const [notificationPermission, setNotificationPermission] = useState(false);
    let subscription = null;

    const provideAccess = () => {
        (async () => {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
			setMediaLibraryPermission(status === 'granted');
		})(); 

        (async () => {
            const { status } = await Notifications.requestPermissionsAsync();
			setNotificationPermission(status === 'granted');
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

        subscription = AppState.addEventListener("change", nextAppState => {
            if (nextAppState === "background"){
              Utils.sendLocalNotification("You left the app! 😱", 'Touch here to return to the application.')
            }  
        });

        return () => {
            subscription.remove();
        };
	}, []);

    return(
        <SafeAreaView>
            <StatusBar style="dark" />
            <Container>
                <Row flex={2}>                 
                    <Logo />
                </Row>
                <Row flex={1.2}>
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
                            {mediaLibraryPermission &&(
                                <Button
                                    disabled={!mediaLibraryPermission} 
                                    title="Load Picture from Gallery"
                                    disabledText="Load Picture from Gallery" 
                                    color={colors.textIcons}  
                                    backgroundColor={colors.accent} 
                                    onPress={goToPictureGallery}
                                />
                            )}

                            {!mediaLibraryPermission &&(
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
                            )}

                            {!notificationPermission &&(
                                <View>                            
                                    <Label fontSize={14} paddingBottom={10}>No access to Notifications</Label>
                                    <Button
                                        title="Provide Send Notifications"
                                        fontSize={fonts.sm}
                                        color={colors.textIcons}  
                                        backgroundColor={colors.primaryText} 
                                        onPress={provideAccess}
                                    />                                  
                                </View>
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