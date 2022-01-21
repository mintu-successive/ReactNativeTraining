import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "./style";

interface InputProp {
    navigation: any,
    data: Array<any>
}

const HomeScreen = (props: InputProp)=> {
    const {navigation, data} = props
    return(
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={()=> {navigation.navigate("Profile")}}>
                <Text>Go to ProfileScreen</Text>
            </TouchableOpacity>
            <FlatList data={data}
            extraData={data}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item, index}) => {
                console.log(item.Country)
                return(
                    <View>
                        <Text>{item.Country}</Text>
                    </View>
                )
            }}/>
        </View>
    )
}

export default HomeScreen