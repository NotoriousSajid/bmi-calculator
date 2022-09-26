import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import {useState} from 'react';
import Colors from '../constants/Colors';
import ImagePath from '../constants/ImagePath';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Gender(props) {
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);

  const OnMaleClick = () => {
    setMale(true);
    setFemale(false);
    props.hGender('male');
  };

  const OnFemaleClick = () => {
    setFemale(true);
    setMale(false);
    props.hGender('female');
  };

  const MaleItems = () => {
    return (
      <TouchableOpacity
        style={styles.maleItems}
        onPress={OnMaleClick}
        activeOpacity={0.7}>
        <AntDesign
          name={male ? 'checkcircle' : 'checkcircleo'}
          color={Colors.button}
          size={moderateScale(24)}
          style={{
            alignSelf: 'flex-end',
            paddingRight: moderateScale(10),
          }}
        />
        <View style={styles.mainItem}>
          <Image source={{uri: ImagePath.male}} style={styles.image} />
          <Text style={styles.text}>Male</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const FemaleItems = () => {
    return (
      <TouchableOpacity
        style={styles.femaleItems}
        onPress={OnFemaleClick}
        activeOpacity={0.7}>
        <AntDesign
          name={female ? 'checkcircle' : 'checkcircleo'}
          color={Colors.button}
          size={moderateScale(24)}
          style={{
            alignSelf: 'flex-end',
            paddingRight: moderateScale(10),
          }}
        />
        <View style={styles.mainItem}>
          <Image source={{uri: ImagePath.female}} style={styles.image} />
          <Text style={styles.text}>Female</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <MaleItems />
      <FemaleItems />
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
  maleItems: {
    width: '49%',
    height: '100%',
    backgroundColor: Colors.card,
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  femaleItems: {
    width: '49%',
    height: '100%',
    backgroundColor: Colors.card,
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainItem: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
  },
  text: {
    fontSize: scale(18),
    color: Colors.btnfnt,
    marginTop: moderateScale(10),
    textTransform: 'uppercase',
  },
});
