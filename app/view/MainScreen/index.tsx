import React, {useEffect, useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../config/Constants';
import {HomeModel, NotificationTabModel} from '../../viewModel';
import styles from './style';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const bottom_tabs = [
  {
    route: 'Home1',
    label: 'Home',
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: HomeModel,
    color: COLORS.primary,
  },
  {
    route: 'NotificationTab',
    label: 'Notification',
    activeIcon: 'notifications',
    inActiveIcon: 'notifications-outline',
    component: NotificationTabModel,
    color: COLORS.primary,
  },
];

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const [render, setRender] = useState(false);
  //  const viewRef = useRef<any | null>();
  // // const textViewRef = useRef() as React.RefObject<Animatable.View & View>;

  // console.log(accessibilityState)
  // console.log('end');
  // useFocusEffect(
  //   React.useCallback(() => {
  //       setRender(!render)
  //     return () => {};
  //   }, [])
  // );
  // );

  // useEffect(() => {
  //   if (focused) {
  //     console.log(viewRef.current);
  //     // if(viewRef.current != null && textViewRef.current != null){
  //     //   viewRef.current.animate({
  //     //     0: {scale: 0.8},
  //     //     1: {scale: 1},
  //     //   });
  //     //   textViewRef.current.animate({
  //     //     0: {scale: 0.8},
  //     //     1: {scale: 1},
  //     //   });
  //     // }
  //   //   if(viewRef.current != {}){
  //   //     viewRef.current.animate({
  //   //       0: {scale: 0.8},
  //   //       1: {scale: 1},
  //   //     });
  //   //   }
  //   // } else {
  //     // if(viewRef.current != null && textViewRef.current != null){
  //       // viewRef.current.animate({
  //       //   0: {scale: 0.8},
  //       //   1: {scale: 1},
  //       // });
  //     //   textViewRef.current.animate({
  //     //     0: {scale: 0.8},
  //     //     1: {scale: 1},
  //     //   });
  //     // }
  //     // if(viewRef.current != null){
  //     //   viewRef.current.animate({
  //     //     0: {scale: 0.8},
  //     //     1: {scale: 1},
  //     //   });
  //     // }
  //   }
  // }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.tabButtonContainer, {flex: focused ? 1 : 0.5}]}>
      <View>
        <Animatable.View
          // ref={viewRef}
          animation="zoomIn"
          duration={1000}>
          <View
            style={[
              styles.tabViewContainer,
              {
                backgroundColor: focused ? COLORS.primary : COLORS.white,
              },
            ]}>
            <Icon
              name={focused ? item.activeIcon : item.inActiveIcon}
              size={24}
              color={focused ? COLORS.white : COLORS.gray}
            />
            {focused && (
              <Animatable.View animation="zoomIn" duration={1000}>
                <Text style={styles.bottomLabelText}>{item.label}</Text>
              </Animatable.View>
            )}
          </View>
        </Animatable.View>
      </View>
    </TouchableOpacity>
  );
};

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabContainer,
      }}>
      {bottom_tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarLabel: item.label,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Main;
