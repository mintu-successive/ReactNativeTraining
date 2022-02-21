import React, {useEffect, useState} from 'react';
import HomeScreen from '../view/homeScreen';
import {dummyData} from '../config/Constants';
interface InputProp {
  navigation: any;
}

const HomeModel = (props: InputProp) => {
  const {navigation} = props;
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [item, setItem] = useState();
  const [index, setIndex] = useState();
  const [popularList, setPopularList] = useState([{}]);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [searchTxt, setSearchTxt] = useState('');

  useEffect(() => {
    setPopularList(dummyData.menu[2].list);
    updateSearch();
  }, [searchTxt]);

  const updateSearch = () => {
    if (popularList) {
      if (searchTxt == '') {
      } else {
        let searchList = popularList
          .filter((item: any) => {
            // console.log(item.name);
            return item.name.toLowerCase().includes(searchTxt.toLowerCase());
          })
          .map(item => {
            console.log(item.name.toLowerCase());
            return item;
          });
        setPopularList(searchList);
      }
    }
  };

  const filterLists = () => {
    // setTimeout(() => {
    //     let data = dummyData.menu[2].list
    //     let filtered = data.filter((item) => {
    //         return item.categories == selectedCategory
    //     }
    //     ).map((item) => item);
    //     console.log(filtered);
    //     setPopularList(filtered)
    // }, 500);
  };

  return (
    <HomeScreen
      navigation={navigation}
      selectedCategory={selectedCategory}
      popularList={popularList}
      filterModalVisible={filterModalVisible}
      clickedItem={(item: any) => {
        setItem(item);
        setSelectedCategory(item.id);
        filterLists();
      }}
      onClickedPopularItem={(item: any, index: number) => {
        navigation.navigate('FoodDetail', {
          item: item,
          index: index,
        });
      }}
      onFilterPress={(item: any) => {
        setFilterModalVisible(item);
      }}
      setSearchTxt={(value: string) => setSearchTxt(value)}
    />
  );
};

export default HomeModel;
