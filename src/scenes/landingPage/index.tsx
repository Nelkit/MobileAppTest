import React, {useState, useEffect} from 'react';
import {SafeAreaView, DeviceEventEmitter} from 'react-native';
import Card from './../../components/ui/card';
import Col from './../../components/ui/col';
import Row from './../../components/ui/row';
import Button from '../../components/ui/button';
import Label from './../../components/ui/label';
import Container from './../../components/ui/container';
import BatteryStatus from './../../components/layout/batteryStatus';
import {colors, fonts, padding} from './../../styles/base';
import * as Battery from 'expo-battery';

interface Props {
    route: any,
    navigation: any
}

const LandingPage = ({ route, navigation }: Props) => {
    return(
        <SafeAreaView>
            <Container>
                <Container paddingLeft={0} paddingRight={0}>
                    <Row>
                        <Col>
                            <BatteryStatus />
                        </Col> 
                        <Col paddingLeft={padding.sm}>
                            <Card borderRadius={15}>
                                <Container>
                                    <Label color={colors.secondaryText}>Internet Connection</Label>
                                    <Label fontSize={fonts.md}>Status</Label>
                                </Container>
                            </Card>
                        </Col> 
                    </Row>
                </Container>
                <Row>
                    <Col>                    
                        <Button 
                            title="Take new picture" 
                            color={colors.textIcons}  
                            backgroundColor={colors.primary} 
                            onPress={() => navigation.push('TakePicture')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col paddingTop={padding.sm}>  
                        <Button 
                            title="Load Picture from Gallery" 
                            color={colors.textIcons}  
                            backgroundColor={colors.accent} 
                            onPress={() => navigation.push('TakePicture')}
                        />
                    </Col>
                </Row>
            </Container>
        </SafeAreaView>
    )
}

export default LandingPage;