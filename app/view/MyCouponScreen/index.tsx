import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Header} from '../../components';
import {dummyData, icons, images} from '../../config/Constants';
import styles from './style';
import RenderItem from './RenderItem';

interface InputProp {
  navigation: any;
  isAvailable: boolean;
  setIsAvailable: (value: boolean) => void;
}

const MyCouponScreen = (props: InputProp) => {
  const {navigation, isAvailable, setIsAvailable} = props;
  return (
    <View style={styles.container}>
      <Header
        title="MY COUPONS"
        leftIcon={icons.back}
        rightIcon={images.profile}
        rightButtonStyle={styles.rightHeaderButton}
        leftOnPress={() => {
          navigation.goBack(null);
        }}
        rightOnPress={() => {}}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => setIsAvailable(true)}
          style={isAvailable ? styles.selectedButton : styles.deselectedButton}>
          <Text
            style={
              isAvailable
                ? styles.selectedButtonText
                : styles.deselectedButtonText
            }>
            Available
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsAvailable(false)}
          style={isAvailable ? styles.deselectedButton : styles.selectedButton}>
          <Text
            style={
              isAvailable
                ? styles.deselectedButtonText
                : styles.selectedButtonText
            }>
            Used
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flatList}
        data={
          isAvailable ? dummyData.available_coupons : dummyData.used_coupons
        }
        extraData={
          isAvailable ? dummyData.available_coupons : dummyData.used_coupons
        }
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item, index}) => <RenderItem item={item} />}
        ItemSeparatorComponent={() => <View style={{margin: 5}} />}
      />
    </View>
  );
};

export default MyCouponScreen;
