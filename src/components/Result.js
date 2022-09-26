import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Button from './Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Result(props) {
  return (
    <Modal visible={props.visible}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={Colors.bg}
          translucent={true}
        />
        {/* result */}
        <View style={styles.resContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={0.7} onPress={props.onRecalculate}>
              <Ionicons
                name={'arrow-back-outline'}
                color={Colors.button}
                size={moderateScale(25)}
                style={{
                  paddingRight: moderateScale(10),
                }}
              />
            </TouchableOpacity>
            <Text style={styles.resHeading}>Your result</Text>
          </View>
          {/* res contaner */}
          <View style={styles.res}>
            <Text style={{...styles.bmiRes, color: props.color}}>
              {props.bmiRes}
            </Text>
            <Text style={styles.bmi}>BMI = {props.bmi} kg/m²</Text>
            <Text style={styles.bmiRange}>BMI Range {props.setBmiRange}</Text>
          </View>
          <Button
            title={'recalculate your bmi'}
            onPress={props.onRecalculate}
          />
        </View>
        <Text style={styles.sajid}>Created by Sajid</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.bg,
    paddingHorizontal: moderateScale(16),
    justifyContent: 'space-between',
  },
  resContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'space-evenly',
  },

  resHeading: {
    fontSize: scale(25),
    color: Colors.btnfnt,
  },
  res: {
    width: '100%',
    height: '50%',
    backgroundColor: Colors.card,
    borderRadius: scale(5),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sajid: {
    alignSelf: 'center',
    fontSize: scale(18),
    color: Colors.btnfnt,
    marginBottom: moderateVerticalScale(10),
    fontStyle: 'italic',
  },
  resText: {
    fontSize: scale,
  },
  bmiRes: {
    fontSize: scale(25),
    textTransform: 'uppercase',
  },
  bmi: {
    fontSize: scale(25),
    color: Colors.btnfnt,
  },
  bmiRange: {
    fontSize: scale(18),
    color: '#636e72',
  },
});
