import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationsScreen from '../../screens/NotificationsScreen/NotificationsScreen';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';

const Stack = createStackNavigator();

const Root = () => (
  <Stack.Navigator>
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

export default Root;
