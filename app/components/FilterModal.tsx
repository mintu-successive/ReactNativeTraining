import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React from "react";
import { Dimensions, Image, Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CustomButton } from ".";
import { COLORS, icons, dummyData, constants } from "../config/Constants";

const FilterModal = ({ visible, onClose }: any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {

            }}
        >
            <View style={styles.parent}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Filter Your Search</Text>
                    <TouchableOpacity onPress={() => onClose()}>
                        <Image
                            style={styles.headerImage}
                            source={icons.cross}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelText}>Distance</Text>
                </View>

                <MultiSlider
                    values={[
                        3,
                        10,
                    ]}
                    sliderLength={Dimensions.get("window").width - 40}
                    // onValuesChange={nonCollidingMultiSliderValuesChange}
                    min={0}
                    max={20}
                    step={1}
                    allowOverlap={false}
                    snapped
                    minMarkerOverlapDistance={40}
                    customMarker={() => {
                        return <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                                style={{ width: 30, height: 30, marginTop: 30 }}
                                source={icons.check_on} />

                            <Text style={{
                                marginTop: 5,
                                color: COLORS.gray,
                                fontWeight: '800'
                            }}>3 Km</Text>
                        </View>
                    }}
                    selectedStyle={{
                        backgroundColor: COLORS.primary,
                    }}
                    unselectedStyle={{
                        backgroundColor: COLORS.lightGray2,
                    }}
                    trackStyle={{
                        height: 10,
                        borderRadius: 5,
                        alignItems: 'center'
                    }}
                // touchDimensions={{
                //     height: 40,
                //     width: 40,
                //     borderRadius: 20,
                //     slipDisplacement: 40,
                // }}
                // customLabel={CustomLabel}
                />

                <View style={styles.labelContainer}>
                    <Text style={styles.labelText}>Delivery Time</Text>
                </View>

                <View>
                    <FlatList
                        data={constants.delivery_time}
                        extraData={constants.delivery_time}
                        keyExtractor={(_, i) => i.toString()}
                        renderItem={({ item, index }) => {
                            return <View style={styles.deliveryItemContainer}>
                                <Text style={styles.deliveryItemText}>{item.label}</Text>
                            </View>
                        }}
                        horizontal
                        style={{
                            marginTop: 10
                        }}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={
                            () => {
                                return <View style={{ margin: 5 }}></View>
                            }
                        }
                    />
                </View>

                <View style={styles.labelContainer}>
                    <Text style={styles.labelText}>Pricing Range</Text>
                </View>

                <MultiSlider
                    values={[
                        10,
                        50,
                    ]}
                    sliderLength={Dimensions.get("window").width - 40}
                    // onValuesChange={nonCollidingMultiSliderValuesChange}
                    min={0}
                    max={100}
                    step={1}
                    allowOverlap={false}
                    snapped
                    minMarkerOverlapDistance={40}
                    customMarker={() => {
                        return <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                                style={{ width: 30, height: 30, marginTop: 30 }}
                                source={icons.check_on} />

                            <Text style={{
                                marginTop: 5,
                                color: COLORS.gray,
                                fontWeight: '800'
                            }}>$10</Text>
                        </View>
                    }}
                    selectedStyle={{
                        backgroundColor: COLORS.primary,
                    }}
                    unselectedStyle={{
                        backgroundColor: COLORS.lightGray2,
                    }}
                    trackStyle={{
                        height: 10,
                        borderRadius: 5,
                        alignItems: 'center'
                    }}
                // touchDimensions={{
                //     height: 40,
                //     width: 40,
                //     borderRadius: 20,
                //     slipDisplacement: 40,
                // }}
                // customLabel={CustomLabel}
                />

                <View style={styles.labelContainer}>
                    <Text style={styles.labelText}>Ratings</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <FlatList
                        data={constants.ratings}
                        extraData={constants.ratings}
                        keyExtractor={(_, i) => i.toString()}
                        renderItem={({ item, index }) => {
                            return <View style={styles.ratingItemContainer}>
                                <Text style={styles.ratingItemText}>{item.label}</Text>
                                <Image
                                    style={styles.ratingImage}
                                    source={icons.star} />
                            </View>
                        }}
                        horizontal
                        style={{
                            marginTop: 10
                        }}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={
                            () => {
                                return <View style={{ margin: 5 }}></View>
                            }
                        }
                    />
                </View>

                <CustomButton
                    style={{
                        marginTop: 20
                    }}
                    text="Apply Filters" />
            </View>
        </Modal>
    )
}

export default FilterModal

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        marginTop: 200,
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 20
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        color: COLORS.black,
        fontWeight: '800'
    },
    headerImage: {
        borderRadius: 10,
        borderColor: COLORS.gray,
        borderWidth: 2,
        width: 30,
        height: 30
    },
    labelContainer: {
        marginTop: 20
    },
    labelText: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: '800'
    },
    deliveryItemContainer: {
        backgroundColor: COLORS.lightGray2,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    deliveryItemText: {
        color: COLORS.gray
    },
    ratingItemContainer: {
        backgroundColor: COLORS.lightGray2,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingItemText: {
        color: COLORS.gray,
        fontSize: 18
    },
    ratingImage: {
        width: 20,
        height: 20,
        marginStart: 5,
        resizeMode: 'contain',
        tintColor: COLORS.gray
    }
})