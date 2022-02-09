import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

const AddTipsRenderItem = ({item, index, selectedTip, setSelectedTip}: any) =>{

    return <TouchableOpacity
    onPress={()=> setSelectedTip(index)} 
    style={selectedTip == index? styles.itemContainer: styles.notSelectedItemContainer}>
        <Text style={selectedTip == index? styles.itemText: styles.notSelectedItemText}>{item}</Text>
    </TouchableOpacity>
}

export default AddTipsRenderItem