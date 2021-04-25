import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp'
import Template from './src/screens/Template'
import Links from './src/screens/Links'
import Preview from './src/screens/Preview'
import Logo from './src/components/Logo'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
	        <Stack.Screen name="SignUp" component={SignUp} options={{
	          headerStyle: {
	            backgroundColor: '#fff',
	            elevation: 0
	          },
	          headerTitleAlign: 'center',
	          headerTitle: props => <Logo {...props} />
	        }} />
	        <Stack.Screen name="SignIn" component={SignIn} options={{
	          headerStyle: {
	            backgroundColor: '#fff',
	            elevation: 0
	          },
	          headerTitleAlign: 'center',
	          headerTitle: props => <Logo {...props} />
	        }} />
	        <Stack.Screen name="Links" component={Links} options={{
	          headerStyle: {
	            backgroundColor: '#fff',
	          },
	          headerTitleAlign: 'center',
	          headerTitle: 'Your Links',
	          headerLeft: null
	        }} />
	        <Stack.Screen name="Template" component={Template} options={{
	          headerStyle: {
	            backgroundColor: '#fff',
	            elevation: 0
	          },
	          headerTitleAlign: 'center',
	          headerTitle: props => <Logo {...props} />
	        }} />
	        <Stack.Screen name="Preview" component={Preview} options={{
	          headerStyle: {
	            backgroundColor: 'rgba(0,0,0,0)',
	            elevation: 0
	          },
	          headerTitleAlign: 'center',
	          headerTitle: ""
	        }} />
	    </Stack.Navigator>
    </NavigationContainer>
  );
}
