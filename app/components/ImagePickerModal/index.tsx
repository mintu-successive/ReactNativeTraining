import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, View} from 'react-native-animatable';
import {icons} from '../../config/Constants';
import styles from './style';

const ImagePickerModal = (props: any) => {
  const {visible, onCameraClick, onGalleryClick, onClose} = props;
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => onClose()}>
          <View style={styles.empty}></View>
        </TouchableWithoutFeedback>
        <View style={styles.subContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Profile Photo</Text>
            <TouchableOpacity>
              <Image style={styles.deleteIcon} source={icons.delete_icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => onCameraClick()}
              style={styles.individualItemContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.iconImage} source={icons.camera} />
              </View>
              <Text style={styles.titleText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onGalleryClick()}
              style={styles.individualItemContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.iconImage} source={icons.gallery} />
              </View>
              <Text style={styles.titleText}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;
