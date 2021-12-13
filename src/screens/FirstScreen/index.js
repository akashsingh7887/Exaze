import React, {useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import labels from '../../constants/labels';
import colors from '../../constants/colors';
import {normalize} from '../../libs/normalize';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import DeviceInfo from 'react-native-device-info';

const FirstScreen = props => {
  const stateText = useSelector(state => state?.update?.updateText);
  const navigateTo = () => {
    props.navigation.navigate('SecondScreen');
  };

  const isSimulator = () => {
    return DeviceInfo.isEmulator();
  };
  useEffect(() => {
    const textDisplay =
      labels?.mobileDevice + isSimulator()
        ? Platform.OS + Platform.OS == 'ios'
          ? labels.simulator
          : labels.emulator
        : Platform.OS + labels.deivice;
    alert(textDisplay);
  }, []);

  return (
    <SafeAreaView style={styles.outerViewWrap}>
      <Text style={[styles.yellowText, styles.toptext]}>{stateText}</Text>
      <SafeAreaView style={styles.outerView}>
        <Text style={styles.yellowText}>{labels.vairationsText}</Text>
        <Button
          text={labels.pressMe}
          viewStyle={styles.buttonA}
          textStyle={styles.buttonAtext}
          onPress={navigateTo}
        />
        <Button
          text={labels.pressMe}
          viewStyle={styles.buttonB}
          textStyle={styles.buttonAtext}
          onPress={navigateTo}
        />
        <Button
          text={labels.pressMe}
          textStyle={styles.buttonCtext}
          onPress={navigateTo}
        />
        <Slider text={labels.swipe} onSwipeEnd={navigateTo} />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  outerViewWrap: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    padding: normalize(25),
  },
  outerView: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},
  buttonA: {backgroundColor: colors?.transparent},
  buttonAtext: {color: colors.lightBlue},
  buttonB: {backgroundColor: colors?.transparentWhite},
  buttonCtext: {color: colors.White},
  yellowText: {color: colors.yellow},
  toptext: {marginBottom: '60%', alignSelf: 'flex-end'},
});
