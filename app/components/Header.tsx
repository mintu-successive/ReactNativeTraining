import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, icons, images, SIZES } from '../config/Constants'

const Header = ({
    style,
    title,
    leftIcon,
    leftButtonStyle,
    rightButtonSyle,
    rightIcon,
    leftOnPress,
    rightOnPress
}: any) => {
    return (
        <View style={[style, styles.container]}>

            <View style={styles.subContainer}>
                {leftIcon != "" &&
                    <TouchableOpacity
                        onPress={() => console.log("left")}
                        style={[leftButtonStyle, styles.leftButton]}>
                        <Image
                            style={styles.leftIconImage}
                            source={leftIcon} />
                    </TouchableOpacity>
                }

                <Text style={styles.title}>{title}</Text>

                <View
                    style={rightIcon == "" ? styles.emptyView : null}
                >
                    {rightIcon != "" &&
                        <TouchableOpacity
                            onPress={() => console.log("right")}
                            style={[rightButtonSyle, styles.rightButton]}>
                            <Image
                                style={styles.rightIconImage}
                                source={rightIcon} />
                        </TouchableOpacity>
                    }
                </View>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    subContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftButton: {
        borderRadius: 10,
        borderColor: COLORS.gray3,
        borderWidth: 2,
        padding: 5,
    },
    leftIconImage: {
        width: SIZES.width * 0.08,
        height: SIZES.height * 0.045,
        resizeMode: "contain"
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.black,
    },
    rightButton: {
        borderRadius: 10,
        padding: 5
    },
    rightIconImage: {
        width: SIZES.width * 0.1,
        height: SIZES.height * 0.055,
        resizeMode: "contain"
    },
    emptyView: {
        width: SIZES.width * 0.08,
        borderRadius: 10,
        padding: 5
    }
})