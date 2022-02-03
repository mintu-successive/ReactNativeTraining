import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  COLORS,
  constants,
  dummyData,
  icons,
  images,
  SIZES,
} from '../config/Constants';

const Header = ({
  style,
  title,
  leftIcon,
  leftButtonStyle,
  rightButtonSyle,
  rightIcon,
  leftOnPress,
  rightOnPress,
  isCart
}: any) => {
  return (
    <View style={[style, styles.container]}>
      <View style={styles.subContainer}>
        {leftIcon != '' && (
          <TouchableOpacity
            onPress={() => leftOnPress()}
            style={[leftButtonStyle, styles.leftButton]}>
            <Image style={styles.leftIconImage} source={leftIcon} />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>

        <View style={rightIcon == '' ? styles.emptyView : null}>
          {rightIcon != '' && (
            <TouchableOpacity
              onPress={() => rightOnPress()}
              style={[rightButtonSyle, styles.rightButton]}>
              <Image style={styles.rightIconImage} source={rightIcon} />
              {isCart != null && (
                <Text style={styles.cartItemNumberText}>
                  {dummyData.myCards.length}
                </Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  subContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftButton: {
    borderRadius: 10,
    borderColor: COLORS.gray3,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  leftIconImage: {
    width: SIZES.width * 0.09,
    height: SIZES.height * 0.04,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.black,
  },
  rightButton: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  rightIconImage: {
    width: SIZES.width * 0.09,
    height: SIZES.height * 0.04,
    resizeMode: 'contain',
  },
  emptyView: {
    width: SIZES.width * 0.08,
    borderRadius: 10,
    padding: 5,
  },
  cartItemNumberText: {
    position: 'absolute',
    end: 5,
    top: 5,
    backgroundColor: COLORS.primary,
    color: 'white',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 50,
    fontSize: 10,
    fontWeight: '800',
  },
});
