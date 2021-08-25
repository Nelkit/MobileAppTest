import React, {useState, useEffect, useRef} from 'react';
import {Image} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Label from './../../components/ui/label';
import Container from './../../components/ui/container';
import Card from './../../components/ui/card';
import Row from './../../components/ui/row';
import Col from './../../components/ui/col';
import {fonts, colors} from './../../styles/base';

const NetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [conectionType, setConectionType] = useState('');
  
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected)
      setConectionType(state.type)
    });
  }, []);

  const networkIcon = (type: string): any => {
    switch (type){
      case 'wifi':
        return require('./../../assets/images/wifi.png')
      case 'cellular':
        return require('./../../assets/images/cellular.png')
      case 'none' || 'unknown':
        return require('./../../assets/images/no-wifi.png')
    }
  }

  return(
    <Card borderRadius={15}>
        <Container>
          <Row>
              <Col weight={1}>
                <Image style={{ width: 35, height: 50 }} resizeMode={'contain'} source={networkIcon(conectionType)} />
              </Col>
              <Col weight={3}>
                <Label color={colors.secondaryText}>Internet Status</Label>
                <Label fontSize={fonts.md}>{`${isConnected ? conectionType : 'disconnected'}` }</Label>
              </Col>
          </Row>
        </Container>
    </Card>
  )
  
}

export default NetworkStatus;