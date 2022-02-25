import React, {createContext, useRef, useState} from 'react';
import {constants, dummyData} from '../config/Constants';

const defaultValues = {
  rating: 0,
  pricingEnd: 0,
  distanceEnd: 0,
  pricingStart: 0,
  distanceStart: 0,
  isFilter: true,
  filterModalVisible: false,
  filterList: dummyData.menu[2].list,
  deliveryTime: constants.delivery_time[0].id,
  onFilter: () => {},
  setRating: (value: number) => {},
  setVisible: (item: boolean) => {},
  setDeliveryTime: (item: number) => {},
  setIsFilterFunc: (value: boolean) => {},
  setPrice: (start: number, end: number) => {},
  setDistance: (start: number, end: number) => {},
  reset: () => {},
};

export const FilterContext = createContext<any>(defaultValues);

const FilterContextProvider = (props: any) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState(
    constants.delivery_time[0].id,
  );
  const [rating, setRating] = useState<number>(0);
  const distanceStart = useRef<number>(3);
  const distanceEnd = useRef<number>(10);
  const pricingStart = useRef<number>(10);
  const pricingEnd = useRef<number>(50);
  const [isFilter, setIsFilter] = useState(true);
  const [filterList, setFilterList] = useState(dummyData.menu[2].list);
  let isDeliverySelected = false;
  let isRatingSelected = false;

  /**
   * This function sets "filterModalVisible"
   * @param visible
   */
  const setVisible = (visible: boolean) => {
    setFilterModalVisible(visible);
  };

  /**
   * This function sets "isFilter"
   * @param visible
   */
  const setIsFilterFunc = (visible: boolean) => {
    setIsFilter(visible);
  };

  const setDelivery = (value: number) => {
    setDeliveryTime(value);
    isDeliverySelected = true;
    console.log('isDeliverySelected', isDeliverySelected);
  };

  const setRatingFunc = (value: number) => {
    setRating(value);
    isRatingSelected = true;
    console.log('isRatingSelected', isRatingSelected);
  };

  const setPrice = (start: number, end: number) => {
    pricingStart.current = start;
    pricingEnd.current = end;
  };

  const setDistance = (start: number, end: number) => {
    distanceStart.current = start;
    distanceEnd.current = end;
  };

  const onFilter = () => {
    let result = reFilter();
    if (result == null) {
      return [];
    }
    setFilterList(result);
    setIsFilter(true);
  };

  const reset = () => {
    setFilterModalVisible(false);
    setDeliveryTime(constants.delivery_time[0].id);
    setRating(0);
    distanceStart.current = 3;
    distanceEnd.current = 10;
    pricingStart.current = 10;
    pricingEnd.current = 50;
    setIsFilter(true);
    setFilterList(dummyData.menu[2].list);
    isDeliverySelected = false;
    isRatingSelected = false;
  };

  const reFilter = () => {
    let result = dummyData.menu[2].list
      .filter((item: any) => {
        return (
          item.distance > distanceStart.current &&
          item.distance < distanceEnd.current &&
          item.delivery_time ==
            constants.delivery_time[deliveryTime - 1].label &&
          item.price > pricingStart.current &&
          item.price < pricingEnd.current &&
          item.rating >= rating + 1
        );
      })
      .map((item: any) => {
        return item;
      });
    return result ? result : null;
  };

  return (
    <FilterContext.Provider
      value={{
        filterModalVisible,
        setVisible,
        distanceStart,
        distanceEnd,
        pricingStart,
        pricingEnd,
        deliveryTime,
        rating,
        setDelivery,
        setRatingFunc,
        setPrice,
        setDistance,
        isFilter,
        filterList,
        onFilter,
        setIsFilterFunc,
        reset,
      }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
