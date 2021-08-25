import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import Col from './../../components/ui/col';
import Row from './../../components/ui/row';
import Button from '../../components/ui/button';
import Container from './../../components/ui/container';
import BatteryStatus from './../../components/layout/batteryStatus';
import NetworkStatus from './../../components/layout/networkStatus';
import {colors, padding} from './../../styles/base';

interface Props {
    route: any,
    navigation: any
}

const LandingPage = ({ route, navigation }: Props) => {
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
                    <Col paddingTop={padding.sm}>                    
                        <Button 
                            title="Take new picture" 
                            color={colors.textIcons}  
                            backgroundColor={colors.primary} 
                            onPress={() => navigation.push('TakePicture')}
                        />
                        <View style={{height: 20}} />
                        <Button 
                            title="Load Picture from Gallery" 
                            color={colors.textIcons}  
                            backgroundColor={colors.accent} 
                            onPress={() => navigation.push('TakePicture')}
                        />
                    </Col>
                </Row>
                <Row flex={5}>
                    
                </Row>
            </Container>
        </SafeAreaView>
    )
}

export default LandingPage;