import React, { useEffect, useState } from "react";
import HomeScreen from "../view/homeScreen/homeScreen";
import { FetchHomeData } from '../controllers'

interface InputProp {
    navigation: any
}

const HomeModel = (props: InputProp) => {
    const { navigation } = props
    const [data, setData] = useState([])
    const getHomeData =async () => {
         let res = await FetchHomeData()
         setData(res)
    }
    useEffect(()=>{
        getHomeData()
    },[])
    return (<HomeScreen navigation={navigation} data={data} />)
}

export default HomeModel