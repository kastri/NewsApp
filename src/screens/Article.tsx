import * as React from 'react';
import {StyleSheet, View as RNVIEW, SafeAreaView} from 'react-native';
import useThemeContext from '../services/ThemeManager/useThemeContext';
import {View, Text} from '../components/ThemedViews';
import Colors from '../constants/Colors';

export default function Article({item}) {
  const {isDarkTheme, theme, switchTheme}: any = useThemeContext();
  return (
    <SafeAreaView
      style={[{flex: 1}, {backgroundColor: Colors[theme].background}]}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 10, justifyContent: 'center'},
});
