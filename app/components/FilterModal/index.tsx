import React, {useContext} from 'react';
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
import {FilterContext} from '../../context/FilterContext';

const FilterModal = () => {
  const {
    filterModalVisible,
    setVisible,
    distanceStart,
    distanceEnd,
    pricingStart,
    pricingEnd,
    deliveryTime,
    rating,
    setDelivery,
    setRatingFunc,
    setPrice,
    setDistance,
    onFilter,
  } = useContext(FilterContext);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={filterModalVisible}>
      <View style={styles.main}>
        <TouchableWithoutFeedback
          onPress={() => setVisible(!filterModalVisible)}>
          <View style={styles.empty}></View>
        </TouchableWithoutFeedback>

        <View style={styles.parent}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Filter Your Search</Text>
            <TouchableOpacity onPress={() => setVisible(!filterModalVisible)}>
              <Image style={styles.headerImage} source={icons.cross} />
            </TouchableOpacity>
          </View>

          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>Distance</Text>
          </View>

          <MultiSlider
            values={[distanceStart.current, distanceEnd.current]}
            sliderLength={Dimensions.get('window').width - 40}
            onValuesChange={values => setDistance(values[0], values[1])}
            min={0}
            max={20}
            step={1}
            allowOverlap={false}
            snapped
            minMarkerOverlapDistance={40}
            customMarker={({currentValue}) => {
              return (
                <View style={styles.markerContainer}>
                  <View style={styles.circleMarker} />
                  <Text
                    style={{
                      marginTop: 5,
                      color: COLORS.gray,
                      fontWeight: '800',
                    }}>
                    {currentValue} Km
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
                  <TouchableOpacity
                    onPress={() => setDelivery(index + 1)}
                    style={
                      deliveryTime == index + 1
                        ? styles.selectedDeliveryItemContainer
                        : styles.deliveryItemContainer
                    }>
                    <Text
                      style={
                        deliveryTime == index + 1
                          ? styles.selectedDeliveryItemText
                          : styles.deliveryItemText
                      }>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
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
            values={[pricingStart.current, pricingEnd.current]}
            sliderLength={Dimensions.get('window').width - 40}
            onValuesChange={values => setPrice(values[0], values[1])}
            min={0}
            max={100}
            step={1}
            allowOverlap={false}
            snapped
            minMarkerOverlapDistance={40}
            customMarker={({currentValue}) => {
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
                    ${currentValue}
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
                  <TouchableOpacity
                    onPress={() => setRatingFunc(index)}
                    style={
                      rating >= index
                        ? styles.selectedRatingItemContainer
                        : styles.ratingItemContainer
                    }>
                    <Text
                      style={
                        rating >= index
                          ? styles.selectedRatingItemText
                          : styles.ratingItemText
                      }>
                      {item.label}
                    </Text>
                    <Image
                      style={
                        rating >= index
                          ? styles.selectedRatingImage
                          : styles.ratingImage
                      }
                      source={icons.star}
                    />
                  </TouchableOpacity>
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
            <CustomButton
              text="Apply Filters"
              onPress={() => {
                onFilter();
                setVisible(!filterModalVisible);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
