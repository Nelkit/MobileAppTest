import React, {useState, useEffect} from 'react';
import * as Battery from 'expo-battery';
import Label from './../../components/ui/label';
import Row from './../../components/ui/row';
import Col from './../../components/ui/col';
import Card from './../../components/ui/card';
import Container from './../../components/ui/container';
import BatteryIcon from './../icons/batteryIcon';
import {fonts, colors} from './../../styles/base';

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  let subscription = null;

  const subscribe = async () => {
    let batteryLevel = await Battery.getBatteryLevelAsync();
    setBatteryLevel(batteryLevel); 
    
    subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
    });
  }

  const unsubscribe = () => {
    subscription && subscription.remove();
    subscription = null;
  }

  useEffect(() => {
    subscribe()

    return () => {
      unsubscribe()
    }
  })

  return(
    <Card borderRadius={15}>
        <Container>
          <Row>
              <Col weight={1}>
                <BatteryIcon batteryLevel={batteryLevel} />
              </Col>
              <Col weight={3}>
                <Label color={colors.secondaryText}>Battery Status</Label>
                <Label fontSize={fonts.md}>{`${Math.round(batteryLevel * 100)}%`}</Label>
              </Col>
          </Row>
        </Container>
    </Card>
  )
  
}

export default BatteryStatus;