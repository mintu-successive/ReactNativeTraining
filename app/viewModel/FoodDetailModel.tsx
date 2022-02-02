import React, { useState } from "react";
import FoodDetailScreen from "../view/FoodDetailScreen";
import { dummyData } from '../config/Constants'

const FoodDetailModel = ({ route, navigation }: any) => {
    const { item } = route.params;
    const [selectedSize, setSelectedSize] = useState(1)

    return (
        <FoodDetailScreen
            navigation={navigation}
            item={item}
            selectedSize={selectedSize}
            onSizePress={(size: any)=> setSelectedSize(size)}
        />
    )
}

export default FoodDetailModel