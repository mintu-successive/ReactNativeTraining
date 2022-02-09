import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../../components';
import {dummyData, icons} from '../../config/Constants';
import styles from './style';

interface InputProp {
  navigation: any;
}

const MyAccountScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" leftIcon={icons.back} leftOnPress={() => {}} />
      <View style={styles.subContainerOne}>
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Full Name</Text>
          <Text style={styles.valueText}>{dummyData.myProfile.name}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Phone Number</Text>
          <Text style={styles.valueText}>{dummyData.myProfile.number}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>User ID</Text>
          <Text style={styles.valueText}>{dummyData.myProfile.id}</Text>
        </View>
      </View>

      <View style={styles.subContainerTwo}>
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>ID Card</Text>
          <Text style={styles.valueText}>{dummyData.myProfile.card}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Date of Birth</Text>
          <Text style={styles.valueText}>{dummyData.myProfile.dob}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Gender</Text>
          <Text style={styles.valueText}>{dummyData.myProfile.gender}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Joined</Text>
          <Text style={styles.valueText}>{dummyData.myProfile.joined}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Email</Text>
          <Text style={styles.valueText}>{dummyData.myProfile.email}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Address</Text>
          <Text style={styles.valueText}>
            {dummyData.myProfile.fullAddress}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MyAccountScreen;
