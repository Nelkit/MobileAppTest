import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LandingPage from './../scenes/landingPage';
import TakePicture from './../scenes/takePicture';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
            name="LandingPage" 
            component={LandingPage} 
            options={{ animation: 'slide_from_right'}}
        />
        <Stack.Screen 
            name="TakePicture" 
            component={TakePicture} 
            options={{ animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;