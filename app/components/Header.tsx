import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {COLORS, icons, images} from '../config/Constants'

const Header = ({ style, title }: any) => {
    return (
        <View style={[style,styles.container]}>

            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.menuButton}>
                    <Image
                    style={styles.menuImage}
                    source={icons.menu}
                    resizeMode="contain"/>
                </TouchableOpacity>

                <Text style={styles.title}>{title}</Text>

                <TouchableOpacity style={styles.profileButton}>
                    <Image
                    style={styles.profileImage}
                    source={images.profile}
                    resizeMode="contain"/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        padding:5
    },
    subContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    menuButton:{
        backgroundColor:'white',
        borderRadius:10,
        borderColor: COLORS.gray3,
        borderWidth:2,
        padding:5,
    },
    menuImage:{
        width:30,
        height:30
    }, 
    title:{
        fontSize:20,
        fontWeight:'800',
        color: COLORS.black,
    },
    profileButton:{
        backgroundColor:'black',
        borderRadius:10,
        borderColor: COLORS.black,
        borderWidth:2,
    },
    profileImage:{
        width:40,
        height:40
    },
})