import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../components';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'none',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Tab" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
