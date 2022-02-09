import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {CustomButton, Header} from '../../components';
import {constants, dummyData, icons, images} from '../../config/Constants';
import AddTipsRenderItem from './AddTipsRenderItem';
import styles from './style';

interface InputProp {
  navigation: any;
  rating: number;
  setRating: (value: number) => void;
  selectedTip: number;
  setSelectedTip: (value: number) => void;
}

const ReviewScreen = (props: InputProp) => {
  const {navigation, rating, setRating, selectedTip, setSelectedTip} = props;
  var ratingViewist: any = [];

  const ratingView = () => {
    constants.ratings.map((_, i) => {
      ratingViewist.push(
        <TouchableOpacity key={i} onPress={() => setRating(i + 1)}>
          <Image
            style={i < rating ? styles.starImageSelected : styles.starImage}
            source={icons.star}
          />
        </TouchableOpacity>,
      );
    });
    return ratingViewist;
  };
  return (
    <View style={styles.container}>
      <Header
        title="RIDER REVIEW"
        leftIcon={icons.back}
        leftOnPress={() => {}}
      />
      <View style={styles.riderDetailsContainer}>
        <Image style={styles.riderProfileImage} source={images.profile} />
        <Text style={styles.nameText}>{dummyData.review.name}</Text>
        <Text style={styles.typeText}>{dummyData.review.type}</Text>
        <View style={styles.statusContainer}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>{dummyData.review.status}</Text>
        </View>
      </View>
      <View style={styles.ratingSectionContainer}>
        <Text style={styles.pleaseRateText}>
          {constants.common.PLEASE_RATE}
        </Text>
        <View style={styles.starContainer}>{ratingView()}</View>
      </View>
      <Text style={styles.addTipsText}>Add Tips</Text>
      <View style={styles.flatList}>
        <FlatList
          data={dummyData.add_tips}
          extraData={dummyData.add_tips}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => (
            <AddTipsRenderItem
              item={item}
              index={index}
              selectedTip={selectedTip}
              setSelectedTip={setSelectedTip}
            />
          )}
          ItemSeparatorComponent={() => <View style={{margin: 5}} />}
          horizontal
        />
      </View>
      <View style={styles.commentContainer}>
        <TextInput style={styles.comment} placeholder="Add a comment" />
      </View>

      <CustomButton
        onPress={() => {}}
        style={styles.customButton}
        text="Suubmit Review"
      />
    </View>
  );
};

export default ReviewScreen;
