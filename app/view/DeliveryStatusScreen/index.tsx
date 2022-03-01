import React from 'react';
import {Image, Text, View} from 'react-native';
import {CustomButton} from '../../components';
import {COLORS, constants, icons} from '../../config/Constants';
import styles from './style';

interface InputProp {
  navigation: any;
}

const DeliveryStatusScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{constants.DELIVERY_HEADER}</Text>
      <Text style={styles.estimatedDeliveryText}>
        {constants.common.ESTIMATED_DELIVERY}
      </Text>
      <Text style={styles.dateTimeText}>
        {constants.common.DELIVERY_DATE_TIME}
      </Text>
      <View style={styles.trackOrderContainer}>
        <View style={styles.trackOrderHeader}>
          <Text style={styles.trackOrderText}>
            {constants.common.TRACK_ORDER}
          </Text>
          <Text style={styles.orderIDText}>{constants.common.ORDER_ID}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.orderStatusContainer}>
          {constants.track_order_status.map((item, index) => {
            return (
              <View key={index}>
                <View style={styles.itemContainer}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      style={[
                        styles.orderStatusIcon,
                        item.status == true
                          ? {tintColor: COLORS.primary}
                          : null,
                      ]}
                      source={icons.check_circle}
                    />
                    {index == constants.track_order_status.length - 1 ? (
                      <View />
                    ) : item.status == true ? (
                      <View style={styles.verticalLine} />
                    ) : (
                      <Image
                        style={styles.lineIcon}
                        source={icons.dotted_line}
                      />
                    )}
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.subTitleText}>{item.sub_title}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.customButtonContainer}>
        <CustomButton
          style={styles.customButton}
          text="DONE"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

export default DeliveryStatusScreen;
