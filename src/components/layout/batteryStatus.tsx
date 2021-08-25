import React, {useState, useEffect, useRef} from 'react';
import * as Battery from 'expo-battery';
import Label from './../../components/ui/label';
import Row from './../../components/ui/row';
import Col from './../../components/ui/col';
import Card from './../../components/ui/card';
import Container from './../../components/ui/container';
import BatteryIcon from './../icons/batteryIcon';
import {fonts, colors} from './../../styles/base';

const useInterval = (callback: any, delay:number) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current;
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  
  useEffect(() => {
    Battery.getBatteryLevelAsync().then((batteryLevel) => {
      setBatteryLevel(batteryLevel);
    });
  }, []);

  useInterval(() => {
    Battery.getBatteryLevelAsync().then((batteryLevel) => {
      setBatteryLevel(batteryLevel);
      console.log(batteryLevel)
    });
  }, 60 * 1000);


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