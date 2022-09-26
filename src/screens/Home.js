import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Gender from '../components/Gender';
import Height from '../components/Height';
import WandA from '../components/WandA';
import Button from '../components/Button';
import Result from '../components/Result';
import Colors from '../constants/Colors';

export default function Home() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(183);
  const [weight, setWeight] = useState(64);
  const [age, setAge] = useState(25);
  const [showRes, setShowRes] = useState(false);
  const [resColor, setResColor] = useState();
  const [bmi, setBmi] = useState();
  const [bmiRes, setBmiRes] = useState();
  const [bmiRange, setBmiRange] = useState();
  var mybmi;
  var myHeight;
  var cWeight;
  var cHeight;

  useEffect(() => {
    cHeight = height;
    cWeight = weight;
    myHeight = cHeight / 100;
    mybmi = cWeight / (myHeight * myHeight);
    setBmi(parseFloat(mybmi).toFixed(1));
    if (bmi < 18.5) {
      setBmiRes('underweight');
      setBmiRange('Below 18.5');
      setResColor(Colors.underWeight);
    } else if (bmi == 18.5 || bmi <= 24.9) {
      setBmiRes('normal');
      setBmiRange('18.5 - 24.9');
      setResColor(Colors.normal);
    } else if (bmi == 25 || bmi <= 29.9) {
      setBmiRes('overweight');
      setBmiRange('25 - 29.9');
      setResColor(Colors.overWeight);
    } else if (bmi == 30 || bmi <= 34.9) {
      setBmiRes('obese');
      setBmiRange('30 - 34.9');
      setResColor(Colors.obese);
    } else {
      setBmiRes('extremely obese');
      setBmiRange('Above 35');
      setResColor(Colors.extObese);
    }
  });

  const SajidAi = () => {
    setShowRes(true);
  };

  const Recalculate = () => {
    setShowRes(false);
  };

  return (
    <View style={styles.container}>
      <Gender hGender={setGender} />
      <Height hHeight={setHeight} />
      <WandA hWeight={setWeight} hAge={setAge} />
      {showRes && (
        <Result
          onRecalculate={Recalculate}
          visible={showRes}
          color={resColor}
          bmiRes={bmiRes}
          setBmiRange={bmiRange}
          bmi={bmi}
        />
      )}
      <Button title={'calculate your bmi'} onPress={SajidAi} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
  },
});
