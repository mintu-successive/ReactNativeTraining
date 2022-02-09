import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Header} from '../../components';
import {constants, icons} from '../../config/Constants';
import styles from './style';
import RenderItem from './RenderItem';

interface InputProp {
  navigation: any;
}

const SettingsScreen = (props: InputProp) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="SETTINGS" leftIcon={icons.back} />

      <View style={styles.flatListContainer}>
        <FlatList
          data={constants.settings}
          extraData={constants.settings}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => {
            return <RenderItem item={item} index={index} navigation={navigation}/>;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
