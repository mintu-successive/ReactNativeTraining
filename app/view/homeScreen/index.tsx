import React, {useContext} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {FilterModal, Header, SearchBar, TitleText} from '../../components';
import {images, icons, dummyData} from '../../config/Constants';
import styles from './style';
import SelectDropdown from 'react-native-select-dropdown';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import RenderItemCategories from './RenderItemCategories';
import RenderItemMain from './RenderItemMain';
import FilterContextProvider, {
  FilterContext,
} from '../../context/FilterContext';
import RenderFilterItem from './RenderFilterItem';

interface InputProp {
  navigation: any;
  selectedCategory: Number;
  popularList: any;
  onFilterPress: (item: any) => void;
  clickedItem: (item: any) => void;
  onClickedPopularItem: (item: any, index: number) => void;
  setSearchTxt: (value: string) => void;
}

const HomeScreen = (props: InputProp) => {
  const {
    navigation,
    selectedCategory,
    clickedItem,
    popularList,
    onFilterPress,
    onClickedPopularItem,
    setSearchTxt,
  } = props;

  const {
    filterModalVisible,
    setVisible,
    isFilter,
    setIsFilterFunc,
    filterList,
    reset,
  } = useContext(FilterContext);

  return (
    <View style={[styles.container]}>
      {/* <StatusBar backgroundColor={COLORS.primary} /> */}

      <Header
        title="HOME"
        style={styles.header}
        leftIcon={icons.menu}
        rightIcon={images.profile}
        rightButtonStyle={styles.rightHeaderButton}
        leftOnPress={() => {
          navigation.openDrawer();
        }}
        rightOnPress={() => {
          navigation.navigate('MyAccount');
        }}
      />

      <SearchBar
        style={styles.search}
        onFilterPress={() => {
          setVisible(!filterModalVisible);
        }}
        onChangeText={(value: string) => setSearchTxt(value)}
      />

      <Text style={styles.deliveryText}>DELIVERY TO</Text>

      <SelectDropdown
        data={['No.88,Jin Padungan, Kuching']}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultValueByIndex={0}
        buttonStyle={styles.dropDownButton}
        buttonTextStyle={styles.dropDownButtonText}
        rowStyle={{
          height: 30,
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        dropdownIconPosition="right"
        renderDropdownIcon={() => {
          return (
            <Image
              source={icons.down_arrow}
              style={{
                height: 10,
                width: 20,
              }}
            />
          );
        }}
      />

      {!isFilter && (
        <View>
          <FlatList
            data={dummyData.categories}
            extraData={dummyData.categories}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item}) => {
              return (
                <RenderItemCategories
                  item={item}
                  clickedItem={clickedItem}
                  selectedCategory={selectedCategory}
                />
              );
            }}
            horizontal
            style={styles.categoriesFlatList}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => {
              return <View style={{margin: 5}}></View>;
            }}
          />
        </View>
      )}
      <FilterModal />

      {!isFilter && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionHeadingContainer}>
            <TitleText text="Popular Near You" />
            <TouchableOpacity>
              <Text style={styles.showAllText}>Show all</Text>
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={popularList}
              extraData={popularList}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({item, index}) => {
                return (
                  <RenderItemMain
                    item={item}
                    index={index}
                    onClickedPopularItem={onClickedPopularItem}
                  />
                );
              }}
              horizontal
              style={styles.popularFlatList}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return <View style={{margin: 10}}></View>;
              }}
            />
          </View>

          <View style={styles.sectionHeadingContainer}>
            <TitleText text="Recommended" />
            <TouchableOpacity>
              <Text style={styles.showAllText}>Show all</Text>
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={dummyData.menu[5].list}
              extraData={dummyData.menu[5].list}
              keyExtractor={(_, i) => i.toString()}
              renderItem={({item}) => {
                return (
                  <RenderItemMain
                    item={item}
                    onClickedPopularItem={onClickedPopularItem}
                  />
                );
              }}
              horizontal
              style={styles.recommendedFlatList}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => {
                return <View style={{margin: 10}}></View>;
              }}
            />
          </View>
        </ScrollView>
      )}

      {isFilter && (
        <View>
          <TouchableOpacity
            onPress={() => {
              reset()
              setIsFilterFunc(!isFilter)
            }}
            style={styles.clearFilterButton}>
            <Text style={styles.clearFilterText}>Clear</Text>
            <Image style={styles.clearFilterImage} source={icons.cross} />
          </TouchableOpacity>
          <FlatList
            style={styles.filterFlatList}
            data={filterList}
            extraData={filterList}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({item, index}) => {
              return <RenderFilterItem item={item} index={index} />;
            }}
            ItemSeparatorComponent={() => {
              return <View style={{margin: 5}} />;
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
