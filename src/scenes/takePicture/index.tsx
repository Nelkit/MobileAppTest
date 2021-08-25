import React from 'react';
import {SafeAreaView} from 'react-native';
import Col from './../../components/ui/col';
import Row from './../../components/ui/row';
import Button from '../../components/ui/button';
import Container from './../../components/ui/container';
import BatteryStatus from './../../components/layout/batteryStatus';
import NetworkStatus from './../../components/layout/networkStatus';
import CameraView from './../../components/layout/cameraView';
import {colors, padding} from './../../styles/base';

interface Props {
    route: any,
    navigation: any
}

const TakePicture = ({ route, navigation }: Props) => {
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
                <Row flex={1}>
                    <Col>
    
                    </Col> 
                    <Col paddingLeft={padding.sm}>
                        <Button 
                            title="Clear" 
                            color={colors.textIcons}  
                            backgroundColor={colors.primary} 
                            onPress={() => {}}
                        />
                    </Col> 
                </Row>
                <Row flex={5}>
                    <CameraView/>
                </Row>
                <Row flex={1}>
                    <Col>
                        <Button 
                            title="Flip Camera" 
                            fontSize={12}
                            paddingHorizontal={5}
                            color={colors.textIcons}  
                            backgroundColor={colors.primary} 
                            onPress={() => {}}
                        />
                    </Col> 
                    <Col paddingLeft={padding.sm}>
                        <Button 
                            title="Take Picture" 
                            fontSize={12}
                            paddingHorizontal={5}
                            color={colors.textIcons}  
                            backgroundColor={colors.accent} 
                            onPress={() => {}}
                        />
                    </Col> 
                    <Col paddingLeft={padding.sm}>
                        <Button 
                            title="Next" 
                            fontSize={12}
                            paddingHorizontal={5}
                            color={colors.textIcons}  
                            backgroundColor={colors.primaryText} 
                            onPress={() => {}}
                        />
                    </Col> 
                </Row>
            </Container>
        </SafeAreaView>
    )
}

export default TakePicture;