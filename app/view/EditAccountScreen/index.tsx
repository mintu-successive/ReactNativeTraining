import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {CustomButton, CustomTextInput, Header} from '../../components';
import {icons} from '../../config/Constants';
import styles from './style';

interface InputProp {
  navigation: any;
}

const EditAccountScreen = (props: InputProp) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Header
        title="EDIT ACCOUNT"
        leftIcon={icons.back}
        leftOnPress={() => {
          navigation.goBack(null);
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <Text style={styles.labelText}>Full Name</Text>
          <TextInput style={styles.customInput} />
          <Text style={styles.labelText}>Phone Number</Text>
          <TextInput style={styles.customInput} />
          <Text style={styles.labelText}>ID Card</Text>
          <TextInput style={styles.customInput} />
          <Text style={styles.labelText}>Date of Birth</Text>
          <TextInput style={styles.customInput} placeholder="MM/DD/YYYY" />
          <Text style={styles.labelText}>Gender</Text>
          <TextInput style={styles.customInput} placeholder="Select Gender" />
          <Text style={styles.labelText}>Email</Text>
          <TextInput style={styles.customInput} />
          <Text style={styles.labelText}>Address</Text>
          <TextInput style={styles.customInput} />
        </View>
      </ScrollView>

      <CustomButton style={styles.saveButton} text="Save" />
    </View>
  );
};

export default EditAccountScreen;
