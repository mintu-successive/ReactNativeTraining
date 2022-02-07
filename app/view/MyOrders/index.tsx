import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../../components';
import {icons, images} from '../../config/Constants';
import HistoryView from './HistoryView';
import styles from './style';
import UpcomingView from './UpcomingView';

interface InputProp {
  navigation: any;
  isHistory: boolean;
  setIsHistory: (value: boolean) => void;
}

const MyOrdersScreen = (props: InputProp) => {
  const {navigation, isHistory, setIsHistory} = props;
  return (
    <View style={styles.container}>
      <Header
        title="MY ORDERS"
        leftIcon={icons.back}
        rightIcon={images.profile}
        rightButtonStyle={styles.rightHeaderButton}
        leftOnPress={() => {}}
        rightOnPress={() => {}}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => setIsHistory(true)}
          style={isHistory ? styles.selectedButton : styles.deselectedButton}>
          <Text
            style={
              isHistory
                ? styles.selectedButtonText
                : styles.deselectedButtonText
            }>
            History
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsHistory(false)}
          style={isHistory ? styles.deselectedButton : styles.selectedButton}>
          <Text
            style={
              isHistory
                ? styles.deselectedButtonText
                : styles.selectedButtonText
            }>
            Upcoming
          </Text>
        </TouchableOpacity>
      </View>

      {isHistory && <HistoryView />}
      {!isHistory && <UpcomingView />}
    </View>
  );
};

export default MyOrdersScreen;
