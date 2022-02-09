import React, { useState } from "react";
import ReviewScreen from "../view/ReviewScreen";

interface InputProp {
    navigation: any
}

const ReviewModel = (props: InputProp) => {
    const {navigation} = props
    const [rating, setRating] = useState(0)
    const [selectedTip, setSelectedTip] = useState(0)

    return (<ReviewScreen 
        navigation={navigation}
        rating={rating}
        setRating={(value: number)=> setRating(value)}
        selectedTip={selectedTip}
        setSelectedTip={(value: number) => setSelectedTip(value)}
        />)
}

export default ReviewModel