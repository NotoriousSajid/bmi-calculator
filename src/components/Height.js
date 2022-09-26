import {StyleSheet, Text, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import Colors from '../constants/Colors';
import Slider from '@react-native-community/slider';
import {useState} from 'react';
import React from 'react';

export default function Height(props) {
  const [range, setRange] = useState(183);

  const OnValueChange = v => {
    setRange(parseInt(v * 100));
    props.hHeight(parseInt(v * 100));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Height</Text>
      <View style={styles.resContain}>
        <Text style={styles.result}>{range}</Text>
        <Text style={styles.unit}>cm</Text>
      </View>
      <Slider
        style={{width: '80%', height: moderateScale(40)}}
        minimumValue={0}
        maximumValue={2.5}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor={Colors.button}
        onValueChange={OnValueChange}
        value={range / 100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
    backgroundColor: Colors.card,
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: scale(18),
    color: Colors.btnfnt,
    textTransform: 'uppercase',
  },
  resContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  result: {
    fontSize: scale(30),
    color: Colors.btnfnt,
    fontWeight: 'bold',
    marginRight: moderateScale(5),
  },
  unit: {
    fontSize: scale(20),
    color: Colors.btnfnt,
    alignSelf: 'flex-end',
  },
});
