import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CustomButton, Header} from '../../components';
import {dummyData, icons} from '../../config/Constants';
import styles from './style';
import MyCardsRenderItem from './MyCardsRenderItem';

interface InputProp {
  navigation: any;
  selectedCard: Number;
}

const MyCardsScreen = (props: InputProp) => {
  const {navigation, selectedCard} = props;
  return (
    <View style={styles.container}>
      <Header title="MY CARDS" leftIcon={icons.back} leftOnPress={() => {}} />

      <View style={{flex: 0.3}}>
        <FlatList
          data={dummyData.myCards}
          extraData={dummyData.myCards}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => {
            return (
              <MyCardsRenderItem
                item={item}
                index={index}
                selectedCard={selectedCard}
              />
            );
          }}
          style={styles.myCardsFlatList}
          ItemSeparatorComponent={() => <View style={{margin: 5}} />}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={{flex: 0.6}}>
        <FlatList
          data={dummyData.allCards}
          extraData={dummyData.allCards}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item, index}) => {
            return (
              <MyCardsRenderItem
                item={item}
                index={index}
                selectedCard={selectedCard}
              />
            );
          }}
          style={styles.allCardsFlatList}
          ItemSeparatorComponent={() => <View style={{margin: 5}} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Text style={styles.allCardsHeader}>Add new card</Text>
          )}
        />
      </View>

      <View style={{flex:0.1, justifyContent:'center'}}>
        <CustomButton 
        text={"Add"}
        onPress={()=>{}}/>
      </View>
    </View>
  );
};

export default MyCardsScreen;
