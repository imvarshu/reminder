import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import Reminders from './Screens/Reminders';
const Stack = createNativeStackNavigator();


export default function App(props) {
  return (
   <NavigationContainer>
    <Stack.Navigator  screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Reminders" component={Reminders} />

    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1F6',
    padding: 10,
    justifyContent:'flex-start'

  },
});
