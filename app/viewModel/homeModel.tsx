import React, {useEffect, useRef, useState} from 'react';
import HomeScreen from '../view/homeScreen';
import {constants, dummyData} from '../config/Constants';
import {FilterModal} from '../components';
import FilterContextProvider from '../context/FilterContext';
interface InputProp {
  navigation: any;
}

const HomeModel = (props: InputProp) => {
  const {navigation} = props;
  const selectedCategory = useRef<any | null>(1);
  const [item, setItem] = useState();
  const [index, setIndex] = useState();
  const [popularList, setPopularList] = useState([{}]);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const searchTxt = useRef<any | null>('');
  const distanceStart = useRef<number | null>(3);
  const distanceEnd = useRef<number | null>(10);
  const pricingStart = useRef<number | null>(10);
  const pricingEnd = useRef<number | null>(50);
  const [deliveryTime, setDeliveryTime] = useState(
    constants.delivery_time[0].id,
  );
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setPopularList(dummyData.menu[2].list);
    updateSearch();
  }, [searchTxt]);

  const updateSearch = () => {
    if (popularList) {
      if (searchTxt.current == '') {
        setPopularList(dummyData.menu[2].list);
      } else {
        let searchList = popularList
          .filter((item: any) => {
            return item.name
              .toLowerCase()
              .includes(searchTxt.current.toLowerCase());
          })
          .map(item => {
            return item;
          });
        setPopularList(searchList);
      }
    }
  };

  const filterLists = () => {
    let data = dummyData.menu[2].list;
    let filtered = data
      .filter(item => {
        return item.categories == selectedCategory.current;
      })
      .map(item => {
        return item;
      });
    setPopularList(filtered);
  };

  return (
    <FilterContextProvider>
      <HomeScreen
        navigation={navigation}
        selectedCategory={selectedCategory.current}
        popularList={popularList}
        clickedItem={(item: any) => {
          setItem(item);
          selectedCategory.current = item.id;
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
        setSearchTxt={(value: string) => {
          searchTxt.current = value;
          updateSearch();
        }}
      />
    </FilterContextProvider>
  );
};

export default HomeModel;
