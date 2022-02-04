import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CustomButton} from '..';
import {COLORS, icons, constants} from '../../config/Constants';
import styles from './style';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const FilterModal = ({visible, onClose}: any) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.main}>
        <TouchableWithoutFeedback onPress={() => onClose()}>
          <View style={styles.empty}></View>
        </TouchableWithoutFeedback>

        <View style={styles.parent}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Filter Your Search</Text>
            <TouchableOpacity onPress={() => onClose()}>
              <Image style={styles.headerImage} source={icons.cross} />
            </TouchableOpacity>
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Distance</Text>
          </View>

          <MultiSlider
            values={[3, 10]}
            sliderLength={Dimensions.get('window').width - 40}
            // onValuesChange={nonCollidingMultiSliderValuesChange}
            min={0}
            max={20}
            step={1}
            allowOverlap={false}
            snapped
            minMarkerOverlapDistance={40}
            customMarker={() => {
              return (
                <View style={styles.markerContainer}>
                  <View style={styles.circleMarker} />
                  <Text
                    style={{
                      marginTop: 5,
                      color: COLORS.gray,
                      fontWeight: '800',
                    }}>
                    3 Km
                  </Text>
                </View>
              );
            }}
            selectedStyle={{
              backgroundColor: COLORS.primary,
            }}
            unselectedStyle={{
              backgroundColor: COLORS.lightGray2,
            }}
            trackStyle={{
              height: 10,
              borderRadius: 5,
              alignItems: 'center',
            }}
          />

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Delivery Time</Text>
          </View>

          <View>
            <FlatList
              data={constants.delivery_time}
              extraData={constants.delivery_time}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.deliveryItemContainer}>
                    <Text style={styles.deliveryItemText}>{item.label}</Text>
                  </View>
                );
              }}
              horizontal
              style={{
                marginTop: 10,
              }}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return <View style={{margin: 5}}></View>;
              }}
            />
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Pricing Range</Text>
          </View>

          <MultiSlider
            values={[10, 50]}
            sliderLength={Dimensions.get('window').width - 40}
            // onValuesChange={nonCollidingMultiSliderValuesChange}
            min={0}
            max={100}
            step={1}
            allowOverlap={false}
            snapped
            minMarkerOverlapDistance={40}
            customMarker={() => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View style={styles.circleMarker} />
                  <Text
                    style={{
                      marginTop: 5,
                      color: COLORS.gray,
                      fontWeight: '800',
                    }}>
                    $10
                  </Text>
                </View>
              );
            }}
            selectedStyle={{
              backgroundColor: COLORS.primary,
            }}
            unselectedStyle={{
              backgroundColor: COLORS.lightGray2,
            }}
            trackStyle={{
              height: 10,
              borderRadius: 5,
              alignItems: 'center',
            }}
          />

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Ratings</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <FlatList
              data={constants.ratings}
              extraData={constants.ratings}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.ratingItemContainer}>
                    <Text style={styles.ratingItemText}>{item.label}</Text>
                    <Image style={styles.ratingImage} source={icons.star} />
                  </View>
                );
              }}
              horizontal
              style={{
                marginTop: 10,
              }}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return <View style={{margin: 5}}></View>;
              }}
            />
          </View>

          <View style={styles.applyButton}>
            <CustomButton text="Apply Filters" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
