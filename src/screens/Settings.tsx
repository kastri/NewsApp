import * as React from 'react';
import {
  StyleSheet,
  Button,
  View as RNVIEW,
  Switch,
  SafeAreaView,
} from 'react-native';
import useThemeContext from '../services/ThemeManager/useThemeContext';
import {View, Text} from '../components/ThemedViews';
import Colors from '../constants/Colors';

export default function SettingsScreen() {
  const {isDarkTheme, theme, switchTheme}: any = useThemeContext();
  return (
    <SafeAreaView
      style={[{flex: 1}, {backgroundColor: Colors[theme].background}]}>
      <View style={styles.container}>
        <RNVIEW style={{flexDirection: 'row'}}>
          <Text style={{textAlign: 'center', padding: 10}}>Dark Theme</Text>
          <Switch value={isDarkTheme()} onValueChange={switchTheme} />
        </RNVIEW>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 10, justifyContent: 'center'},
});
