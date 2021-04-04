import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
