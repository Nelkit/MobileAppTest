import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './../scenes/landingPage';
import TakePicture from './../scenes/takePicture';
import DisplayPicture from './../scenes/displayPicture';

const Stack = createNativeStackNavigator();

function App() {
  	return (
		<NavigationContainer>
			<Stack.Navigator >
				<Stack.Screen
					name="LandingPage" 
					component={LandingPage} 
					options={{title: "Landing Page" ,  animation: 'slide_from_right'}}
				/>
				<Stack.Screen 
					name="TakePicture" 
					component={TakePicture} 
					options={{title: "Take Picture", animation: 'slide_from_right'}}
				/>
				<Stack.Screen 
					name="DisplayPicture" 
					component={DisplayPicture} 
					options={{title: "Display Picture", animation: 'slide_from_right'}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
  	);
}

export default App;