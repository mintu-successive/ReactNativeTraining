import React from 'react';
import {Image, SectionList, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, dummyData} from '../../config/Constants';
import styles from './style';

const UpcomingView = () => {
  const RenderItem = ({item}: any) => {
    return (
      <View style={styles.historyItemContainer}>
        <View style={styles.subHistoryContainer}>
          <View style={styles.historyImageContainer}>
            <Image style={styles.historyItemImage} source={item.image} />
          </View>
          <View style={styles.orderStatusContainer}>
            <Text style={styles.historyItemNameText}>{item.name}</Text>
            <Text style={styles.historyItemTimestampText}>
              {item.timestamp} | {item.quantity}
            </Text>
            <Text
              style={[
                styles.historyItemStatusText,
                item.status
                  ? {
                      color: COLORS.green,
                    }
                  : {
                      color: COLORS.red,
                    },
              ]}>
              {item.status ? 'Order Delivered' : 'Order Cancelled'}
            </Text>
          </View>
          <Text style={styles.historyItemPriceText}>{item.price}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.selectedButton}>
            <Text style={styles.selectedButtonText}>Re-Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deselectedButton}>
            <Text style={styles.deselectedButtonText}>Rate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.upcomingContainer}>
      {dummyData.upcoming_orders.map((item, index) => {
        return (
          <View key={index} style={styles.upcomingItemContainer}>
            <View style={styles.subUpcomingContainer}>
              <View style={styles.upcomingImageContainer}>
                <Image style={styles.upcomingItemImage} source={item.image} />
              </View>
              <View style={styles.upcomingOrderStatusContainer}>
                <Text style={styles.upcomingItemNameText}>{item.name}</Text>
                <Text style={styles.upcomingItemTimestampText}>
                  {item.timestamp} | {item.quantity}
                </Text>
                <Text
                  style={[
                    styles.upcomingItemStatusText,
                    item.status
                      ? {
                          color: COLORS.green,
                        }
                      : {
                          color: COLORS.red,
                        },
                  ]}>
                  {item.status ? 'Order Delivered' : 'Order Cancelled'}
                </Text>
              </View>
              <Text style={styles.upcomingItemPriceText}>{item.order_id}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.selectedButton}>
                <Text style={styles.selectedButtonText}>Re-Order</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deselectedButton}>
                <Text style={styles.deselectedButtonText}>Rate</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}

      <SectionList
        sections={dummyData.latest_orders}
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

export default UpcomingView;
