import React, {useState, useRef} from 'react';
import {Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import labels from '../../constants/labels';
import colors from '../../constants/colors';
import {normalize} from '../../libs/normalize';
import Button from '../../components/Button';
import {updateName} from '../../redux/actions';
import {bindActionCreators} from 'redux';

const SecondScreen = props => {
  const myRef = useRef();
  const [state, setState] = useState('');

  const navigateTo = () => {
    props.navigation.navigate('ThirdScreen');
  };

  return (
    <SafeAreaView style={styles.outerViewWrap}>
      <Text style={[styles.yellowText, styles.toptext]}>
        {props?.updateText}
      </Text>
      <SafeAreaView style={styles.outerView}>
        <TextInput
          onChangeText={text => setState(text)}
          style={styles.inputField}
          ref={myRef}
        />
        <Button
          text={labels.submit}
          textStyle={styles.buttonCtext}
          onPress={() => {
            alert(labels.stateUpdated);
            props?.updateActions(state);
          }}
        />
        <Button
          text={labels.clearState}
          textStyle={styles.buttonCtext}
          onPress={() => {
            myRef?.current?.clear();
            props?.updateActions('');
            alert(labels.stateClear);
          }}
        />
        <Button
          text={labels.next}
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

const mapDispatchToProps = dispatch => ({
  updateActions: bindActionCreators(updateName, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SecondScreen);

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
