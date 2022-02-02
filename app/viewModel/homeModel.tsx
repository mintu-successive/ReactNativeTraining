import React, { useEffect, useState } from "react";
import HomeScreen from "../view/homeScreen";
import { dummyData } from '../config/Constants'
interface InputProp {
    navigation: any
}

const HomeModel = (props: InputProp) => {
    const { navigation } = props
    const [selectedCategory, setSelectedCategory] = useState(1)
    const [item, setItem] = useState()
    const [popularList, setPopularList] = useState([{}])
    const [filterModalVisible,setFilterModalVisible] = useState(false)

    useEffect(() => {
        setPopularList(dummyData.menu[2].list)
    }, [])

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
    }

    return (
        <HomeScreen
            navigation={navigation}
            selectedCategory={selectedCategory}
            popularList={popularList}
            filterModalVisible={filterModalVisible}
            clickedItem={(item: any) => {
                setItem(item)
                setSelectedCategory(item.id)
                filterLists()
            }}
            onClickedPopularItem={(item:any)=> {
                navigation.navigate('FoodDetail', {
                    item: item
                  });
            }}
            onFilterPress={(item:any)=> setFilterModalVisible(item)}
        />
    )
}

export default HomeModel