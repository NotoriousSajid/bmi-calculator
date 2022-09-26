import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from './src/constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import Home from './src/screens/Home';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={Colors.bg}
        translucent={true}
      />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    paddingHorizontal: moderateScale(16),
  },
});
