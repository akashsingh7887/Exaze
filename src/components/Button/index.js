import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {normalize} from '../../libs/normalize';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={[styles?.outerView, props?.viewStyle]}
      onPress={props?.onPress}>
      <Text style={[styles.textStyle, props?.textStyle]}>{props?.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  outerView: {
    height: normalize(56),
    width: '100%',
    backgroundColor: colors.lightBlue,
    borderRadius: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalize(15),
  },
  textStyle: {color: colors.white, fontWeight: 'bold'},
});
