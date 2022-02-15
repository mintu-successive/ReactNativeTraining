import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../components';
import Main from '../view/MainScreen';

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
      <Drawer.Screen name="Tab" component={Main} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
