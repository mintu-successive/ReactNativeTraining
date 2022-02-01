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
        //     let filtered = popularList.filter((item) => {
        //         return item.categories.includes(selectedCategory)
        //     }
        //     ).map(({id,name,description,categories,price,calories,isFavourite,image}:any) => ({id,name,description,categories,price,calories,isFavourite,image}));
    
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
            onFilterPress={(item:any)=> setFilterModalVisible(item)}
        />
    )
}

export default HomeModel