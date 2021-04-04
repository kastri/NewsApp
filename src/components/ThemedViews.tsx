import * as React from 'react';
import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
} from 'react-native';
import Colors from '../constants/Colors';
import useThemeContext from '../services/ThemeManager/useThemeContext';

export function Text(props) {
  const {theme}: any = useThemeContext();
  const {style, ...otherProps} = props;
  const textColor = Colors[theme].text;
  return <DefaultText style={[{color: textColor}, style]} {...otherProps} />;
}

export function TextInput(props) {
  const {theme}: any = useThemeContext();
  const {style, ...otherProps} = props;
  const textColor = Colors[theme].text;
  return (
    <DefaultTextInput style={[{color: textColor}, style]} {...otherProps} />
  );
}

export function View(props) {
  const {theme}: any = useThemeContext();
  const {style, ...otherProps} = props;
  const backgroundColor = Colors[theme].background;
  return (
    <DefaultView
      style={[{backgroundColor: backgroundColor}, style]}
      {...otherProps}
    />
  );
}
