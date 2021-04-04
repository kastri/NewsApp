import * as React from 'react';
import {StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {Text, View} from '../components/ThemedViews';
import {useNavigation} from '@react-navigation/native';

export default function Article({item}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('News Detail', {item: item});
      }}>
      <View style={styles.articleView}>
        <Image
          style={styles.articleImage}
          width={'100%'}
          height={150}
          source={{uri: item.urlToImage}}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 16,
  },
  articleView: {
    margin: 10,
    borderColor: '#e3e3e3',
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  articleInput: {
    width: '100%',
    margin: 10,
    padding: 10,
    borderColor: '#e3e3e3',
    borderRadius: 10,
    borderWidth: 2,
  },
  articleImage: {
    width: '100%',
    height: 58,
  },
});
