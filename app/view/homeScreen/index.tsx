import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { FilterModal, Header, SearchBar, TitleText } from "../../components";
import { COLORS, constants, images, icons, dummyData } from "../../config/Constants";
import styles from "./style";
import SelectDropdown from "react-native-select-dropdown";
import { FlatList, ScrollView } from "react-native-gesture-handler";

interface InputProp {
    navigation: any,
    selectedCategory: Number,
    popularList: any,
    filterModalVisible: Boolean,
    onFilterPress: (item: any) => void,
    clickedItem: (item: any) => void,
    onClickedPopularItem: (item: any) => void
}

const HomeScreen = (props: InputProp) => {
    const {
        navigation,
        selectedCategory,
        clickedItem,
        popularList,
        onFilterPress,
        filterModalVisible,
        onClickedPopularItem
    } = props

    const renderItemCategories = ({ item }: any) => (
        <TouchableOpacity
            onPress={() => clickedItem(item)}
            style={[
                item.id == selectedCategory ? {
                    backgroundColor: COLORS.primary
                } : {
                    backgroundColor: COLORS.lightGray1
                }, styles.categoriesItemContainer]}>
            <Image
                style={styles.categoriesImage}
                source={item.icon} />
            <Text style={[
                item.id == selectedCategory ? {
                    color: COLORS.white
                } : {
                    color: COLORS.gray
                }, styles.categoriesText]}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderItemMain = ({ item, index }: any) => (
        <TouchableOpacity
            onPress={() => onClickedPopularItem(item)}
            style={styles.renderMainContainer}>
            <View style={styles.caloriesContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={icons.calories}
                        style={styles.calorieImage} />
                    <Text style={{
                        color: COLORS.gray,
                    }}>{item.calories} Calories</Text>
                </View>
                <TouchableOpacity>
                    <Image source={icons.love}
                        style={styles.loveImage} />
                </TouchableOpacity>
            </View>

            <Image source={item.image}
                style={styles.renderMainFoodImage} />

            <Text style={styles.renderMainNameText}>{item.name}</Text>
            <Text style={styles.renderMainDescText}>{item.description}</Text>
            <Text style={styles.renderMainPriceText}>{"$".concat(item.price)}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={[filterModalVisible ?
            {
                opacity: 0.2
            } : {
                opacity: 1
            },
        styles.container
        ]}>
            <StatusBar backgroundColor={COLORS.primary} />

            <Header
                title="HOME"
                leftIcon={icons.menu}
                rightIcon={images.profile}
                rightButtonSyle={styles.rightHeaderButton}
                leftOnPress={() => { }}
                rightOnPress={() => { }}
            />

            <SearchBar
                style={styles.search}
                onFilterPress={() => onFilterPress(!filterModalVisible)}
            />

            <Text style={styles.deliveryText}>DELIVERY TO</Text>

            <SelectDropdown
                data={["No.88,Jin Padungan, Kuching"]}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                defaultValueByIndex={0}
                buttonStyle={styles.dropDownButton}
                buttonTextStyle={styles.dropDownButtonText}
                rowStyle={{
                    height: 30,
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                dropdownIconPosition="right"
                renderDropdownIcon={() => {
                    return <Image
                        source={icons.down_arrow}
                        style={{
                            height: 10,
                            width: 20
                        }}
                    />
                }}
            />

            <View>
                <FlatList
                    data={dummyData.categories}
                    extraData={dummyData.categories}
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={renderItemCategories}
                    horizontal
                    style={{
                        margin: 10,
                        paddingVertical: 10
                    }}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={
                        () => {
                            return <View style={{ margin: 5 }}></View>
                        }
                    }
                />
            </View>

            <FilterModal
                visible={filterModalVisible}
                onClose={() => onFilterPress(!filterModalVisible)} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.sectionHeadingContainer}>
                    <TitleText text="Popular Near You" />
                    <TouchableOpacity>
                        <Text style={styles.showAllText}>Show all</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <FlatList
                        data={popularList}
                        extraData={popularList}
                        keyExtractor={(_, i) => i.toString()}
                        renderItem={renderItemMain}
                        horizontal
                        style={{
                            margin: 10,
                            paddingVertical: 10
                        }}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={
                            () => {
                                return <View style={{ margin: 10 }}></View>
                            }
                        }
                    />
                </View>

                <View style={styles.sectionHeadingContainer}>
                    <TitleText text="Recommended" />
                    <TouchableOpacity>
                        <Text style={styles.showAllText}>Show all</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <FlatList
                        data={dummyData.menu[5].list}
                        extraData={dummyData.menu[5].list}
                        keyExtractor={(_, i) => i.toString()}
                        renderItem={renderItemMain}
                        horizontal
                        style={{
                            margin: 10,
                            paddingVertical: 10
                        }}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={
                            () => {
                                return <View style={{ margin: 10 }}></View>
                            }
                        }
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen