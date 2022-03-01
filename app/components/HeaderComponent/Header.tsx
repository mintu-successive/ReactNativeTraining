import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './Style';


const Header = ({
  style,
  title,
  leftIcon,
  leftButtonStyle,
  rightButtonStyle,
  rightIcon,
  leftOnPress,
  rightOnPress,
  isCart,
  itemNumber,
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
              style={[rightButtonStyle, styles.rightButton]}>
              <Image style={styles.rightIconImage} source={rightIcon} />
              {isCart != null && (
                <Text style={styles.cartItemNumberText}>{itemNumber}</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
