import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {cars, images} from '../../config';
import {FlatList} from 'react-native-gesture-handler';
import {getImageTop} from '../../common';

const RouteMap = () => {
  return (
    <MapView
      style={styles.mapView}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((item, index) => (
        <Marker
          key={index}
          coordinate={{latitude: item.latitude, longitude: item.longitude}}>
          <Image style={styles.marker} source={getImageTop(item.type)} />
        </Marker>
      ))}
    </MapView>
  );
};

export default RouteMap;
