import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import labels from '../../constants/labels';
import colors from '../../constants/colors';
import {normalize} from '../../libs/normalize';
import Button from '../../components/Button';

const ThirdScreen = props => {
  const navigateTo = () => {
    props.navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.outerViewWrap}>
      <Text style={[styles.yellowText, styles.toptext]}>
        {props?.updateText}
      </Text>
      <SafeAreaView style={styles.outerView}>
        <Button
          text={labels.backTo}
          viewStyle={styles.buttonB}
          textStyle={styles.buttonAtext}
          onPress={navigateTo}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  updateText: state?.update?.updateText,
});

export default connect(
  mapStateToProps,
  null,
)(ThirdScreen);

const styles = StyleSheet.create({
  outerViewWrap: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    padding: normalize(25),
  },
  outerView: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonA: {backgroundColor: colors?.transparent},
  buttonAtext: {color: colors.lightBlue},
  buttonB: {backgroundColor: colors?.transparentWhite},
  buttonCtext: {color: colors.White},
  yellowText: {color: colors.yellow},
  toptext: {alignSelf: 'flex-end'},
  inputField: {
    borderRadius: normalize(10),
    width: '100%',
    color: colors.White,
    borderWidth: 0.5,
    borderColor: colors.lightBlue,
    marginVertical: normalize(15),
  },
});
