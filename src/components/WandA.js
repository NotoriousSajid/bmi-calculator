import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constants/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';

export default function WandA(props) {
  const [weight, setWeight] = useState(64);
  const [age, setAge] = useState(25);

  const myWeight = exp => {
    if (exp == 'add') {
      setWeight(weight + 1);
      props.hWeight(weight + 1);
    } else if (exp == 'min' && weight > 0) {
      setWeight(weight - 1);
      props.hWeight(weight - 1);
    }
  };

  const myAge = exp => {
    if (exp == 'add') {
      setAge(age + 1);
      props.hAge(age + 1);
    } else if (exp == 'min' && age > 0) {
      setAge(age - 1);
      props.hAge(age - 1);
    }
  };

  const Weight = () => {
    return (
      <View style={styles.weight}>
        <Text style={styles.text}>Weight</Text>
        <View style={styles.resContain}>
          <Text style={styles.result}>{weight}</Text>
          <Text style={styles.unit}>kg</Text>
        </View>
        <View style={styles.incDecMain}>
          {/* inc */}
          <TouchableOpacity
            style={styles.incDecItem}
            onPress={() => myWeight('min')}
            activeOpacity={0.7}>
            <Text style={styles.incDec}>-</Text>
          </TouchableOpacity>
          {/* dec */}
          <TouchableOpacity
            style={styles.incDecItem}
            onPress={() => myWeight('add')}
            activeOpacity={0.7}>
            <Text style={styles.incDec}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Age = () => {
    return (
      <View style={styles.weight}>
        <Text style={styles.text}>Age</Text>
        <View style={styles.resContain}>
          <Text style={styles.result}>{age}</Text>
          <Text style={styles.unit}>yr</Text>
        </View>
        <View style={styles.incDecMain}>
          {/* inc */}
          <TouchableOpacity
            style={styles.incDecItem}
            onPress={() => myAge('min')}
            activeOpacity={0.7}>
            <Text style={styles.incDec}>-</Text>
          </TouchableOpacity>
          {/* dec */}
          <TouchableOpacity
            style={styles.incDecItem}
            onPress={() => myAge('add')}
            activeOpacity={0.7}>
            <Text style={styles.incDec}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Weight />
      <Age />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weight: {
    width: '49%',
    height: '100%',
    backgroundColor: Colors.card,
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unit: {
    fontSize: scale(20),
    color: Colors.btnfnt,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: scale(18),
    color: Colors.btnfnt,
    textTransform: 'uppercase',
  },
  result: {
    fontSize: scale(30),
    color: Colors.btnfnt,
    fontWeight: 'bold',
    marginRight: moderateScale(5),
  },
  incDecMain: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  incDecItem: {
    width: moderateScale(55),
    height: moderateScale(55),
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(50),
  },
  incDec: {
    fontSize: scale(30),
    color: Colors.btnfnt,
  },
});
