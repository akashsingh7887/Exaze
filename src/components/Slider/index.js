/**
 * WelcomeWindow page/screen
 * @screen
 */

import React, {useState} from 'react';
import {
  View,
  Animated,
  PanResponder,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {normalize} from '../../libs/normalize';
import colors from '../../constants/colors';
const width = Dimensions.get('window').width;

const Slider = props => {
  const _animatedValue = new Animated.Value(0);

  const _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dx <= 0 || gestureState.dx > width - 44) {
        return false;
      }
      _animatedValue.setValue(gestureState.dx);
    },

    onPanResponderRelease: (evt, gestureState) => {
      if (Math.floor(gestureState.dx) >= width / 2) {
        Animated.spring(_animatedValue, {
          toValue: width - 40,
          tension: 0.6,
          useNativeDriver: true,
        }).start();

        requestAnimationFrame(() => {
          _animatedValue.setValue(0);
          props?.onSwipeEnd();
        });
      } else {
        Animated.spring(_animatedValue, {
          toValue: 0,
          tension: 0.6,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const translateObj = {
    transform: [
      {
        translateX: _animatedValue,
      },
    ],
  };
  return (
    <View style={styles.swiperContainer}>
      <Animated.View
        style={[styles.switch, styles.global, translateObj]}
        {..._panResponder.panHandlers}>
        <FontAwesome name="diamond" size={normalize(25)} color={colors.White} />
      </Animated.View>
      <Text style={styles.swiperText}>{props?.text}</Text>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  swiperContainer: {
    height: normalize(56),
    width: '100%',
    backgroundColor: '#0006',
    borderRadius: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.lightBlue,
    borderWidth: 0.5,
    shadowColor: '#fff',
    shadowOpacity: 0.7,
    shadowRadius: normalize(10),
    marginVertical: normalize(15),
  },

  global: {justifyContent: 'center', alignItems: 'center'},
  switch: {
    height: normalize(56),
    width: normalize(56),
    borderRadius: normalize(10),
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
  },
  swiperText: {
    color: colors.lightBlue,
    textAlign: 'center',
    flex: 1,
  },
});
