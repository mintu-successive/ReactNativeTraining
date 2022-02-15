import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from './style';
import {Image, Text} from 'react-native-animatable';
import {constants, dummyData, icons, images} from '../../config/Constants';
import RenderItem from './RenderItem';

const CustomDrawer = (props: any) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.closeIcon} source={icons.cross} />
        <View style={styles.profileContainer}>
          <Image style={styles.profileIcon} source={images.profile} />
          <View style={styles.textContainer}>
            <Text style={styles.profileNameText}>
              {dummyData.myProfile.name}
            </Text>
            <Text style={styles.profileDescText}>View your profile</Text>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={dummyData.drawer_data}
          extraData={dummyData.drawer_data}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => {
            return <RenderItem item={item} index={index} navigation={props.navigation} />;
          }}
        />
      </View>
      <View style={styles.drawerBottomSection}>
        <TouchableOpacity onPress={() => {}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.itemImage} source={icons.logout} />
            <Text style={styles.itemText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
