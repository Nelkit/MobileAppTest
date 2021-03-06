import React from 'react';
import {SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Col from './../../components/ui/col';
import Row from './../../components/ui/row';
import Container from './../../components/ui/container';
import BatteryStatus from './../../components/layout/batteryStatus';
import NetworkStatus from './../../components/layout/networkStatus';
import CameraView from './../../components/layout/cameraView';
import {padding} from './../../styles/base';

interface Props {
    navigation: any
}

const TakePicture = ({ navigation }: Props) => {
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
                <Row flex={8}>
                    <CameraView onTapNext={(uri) => navigation.push('DisplayPicture', {photoUri: uri})}/>
                </Row>
            </Container>
        </SafeAreaView>
    )
}

export default TakePicture;