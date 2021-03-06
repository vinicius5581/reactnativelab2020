import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Root from '../Root/Root';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import QrCodeScreen from '../../screens/QrCodeScreen/QrCodeScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="QrCodeScreen" component={QrCodeScreen} />
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
