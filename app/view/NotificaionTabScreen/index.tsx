import React from 'react';
import {SectionList, Text, TouchableOpacity, View} from 'react-native';
import {dummyData, icons, images} from '../../config/Constants';
import styles from './style';
import RenderItem from './RenderItem';
import {Header} from '../../components';

interface InputProp {
  navigation: any;
}

const NotificationTabScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header
        title="NOTIFICATIONS"
        leftIcon={icons.menu}
        leftOnPress={() => {
          navigation.openDrawer();
        }}
        rightOnPress={() => {
          navigation.navigate('MyAccount');
        }}
        rightIcon={images.profile}
        rightButtonStyle={styles.rightButton}
      />
      <SectionList
        sections={dummyData.notification_list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return <RenderItem item={item} />;
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.titleText}>{title}</Text>
        )}
        ItemSeparatorComponent={() => {
          return <View style={{margin: 5}} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotificationTabScreen;
