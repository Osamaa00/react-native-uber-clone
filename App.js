import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';

// const Drawer = createDrawerNavigator();


export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={ store } >
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={ HomeScreen } options={{ headerShown: false }} />
            <Stack.Screen name="MapScreen" component={ MapScreen } options={{ headerShown: false }} />
          </Stack.Navigator>
        </SafeAreaProvider>
        </NavigationContainer>
    </Provider>
  );
}