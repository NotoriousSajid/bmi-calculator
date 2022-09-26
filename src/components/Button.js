import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constants/Colors';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: moderateScale(50),
    backgroundColor: Colors.button,
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.btnfnt,
    fontSize: scale(18),
    textTransform: 'uppercase',
  },
});
