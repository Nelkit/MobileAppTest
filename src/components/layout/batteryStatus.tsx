import React, {useState, useEffect} from 'react';
import * as Battery from 'expo-battery';
import Label from './../../components/ui/label';
import Container from './../../components/ui/container';
import Card from './../../components/ui/card';
import {fonts, colors} from './../../styles/base';

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  let subscription: { remove: any; } | null = null;

  const subscribe = async () => {
    let batteryLevel = Math.round((await Battery.getBatteryLevelAsync()) * 100);
    setBatteryLevel(batteryLevel); 

    subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      console.log("Battery Level Changed: " + batteryLevel);
      batteryLevel = Math.round(batteryLevel * 100);
      setBatteryLevel(batteryLevel);
    });
  }

  const unsubscribe = () => {
    console.log("unsubscribe");
    subscription && subscription.remove();
    subscription = null;
  }

  useEffect(() => {
    subscribe()

    return () => {
      //unsubscribe()
    }
  })

  return(
    <Card borderRadius={15}>
        <Container>
            <Label color={colors.secondaryText}>Battery Status</Label>
            <Label fontSize={fonts.md}>{`${batteryLevel}%`}</Label>
        </Container>
    </Card>
  )
  
}

export default BatteryStatus;