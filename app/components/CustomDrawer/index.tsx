import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Image, Text} from 'react-native-animatable';
import {dummyData, icons, images} from '../../config/Constants';
import RenderItem from './RenderItem';
import styles from './style';
import {ImagePickerModal} from '..';
import {useSelector, useDispatch} from 'react-redux';
import {setProfilePic} from '../../redux/actions';

const CustomDrawer = (props: any) => {
  const {navigation} = props;
  const [isVisible, setIsVisible] = useState(false);
  const profileUri = useSelector(state => state.setProfilePic);
  const dispatch = useDispatch();

  async function chooseImageFromCamera() {
    const result = await launchCamera(
      {
        mediaType: 'photo',
        quality: 1,
      },
      () => {},
    );

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.errorMessage) {
      console.log('ImagePicker Error: ', result.errorMessage);
    } else {
      const source = {uri: result?.assets[0]?.uri};
      dispatch(setProfilePic(source.uri));
      setIsVisible(!isVisible);
    }
  }

  async function chooseImageFromGallery() {
    const result = await launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      () => {},
    );

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.errorMessage) {
      console.log('ImagePicker Error: ', result?.errorMessage);
    } else {
      const source = {uri: result?.assets[0]?.uri};
      dispatch(setProfilePic(source.uri));
      setIsVisible(!isVisible);
    }
  }

  useEffect(() => {}, [isVisible]);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Image style={styles.closeIcon} source={icons.cross} />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsVisible(!isVisible);
            }}>
            <Image
              style={styles.profileIcon}
              source={profileUri != '' ? {uri: profileUri} : images.profile}
            />
          </TouchableOpacity>
          <ImagePickerModal
            visible={isVisible}
            onCameraClick={() => chooseImageFromCamera()}
            onGalleryClick={() => chooseImageFromGallery()}
            onClose={() => setIsVisible(!isVisible)}
          />
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
            return (
              <RenderItem
                item={item}
                index={index}
                navigation={props.navigation}
              />
            );
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
