import * as React from 'react';
import {StyleSheet, View as RNVIEW, SafeAreaView, Image} from 'react-native';
import useThemeContext from '../services/ThemeManager/useThemeContext';
import {View, Text} from '../components/ThemedViews';
import Colors from '../constants/Colors';

export default function Article({route, navigation}) {
  const {isDarkTheme, theme, switchTheme}: any = useThemeContext();
  const {item} = route.params;
  return (
    <SafeAreaView
      style={[{flex: 1}, {backgroundColor: Colors[theme].background}]}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.articleAuthor}>
          {item.source.name} | {item.publishedAt}
        </Text>
        <Image
          style={styles.articleImage}
          width={'100%'}
          height={200}
          source={{uri: item.urlToImage}}
        />
        <Text style={styles.articleAuthor}>By {item.author}</Text>
        <Text style={styles.content}> {item.description}</Text>
        <Text style={styles.content}> {item.content}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    paddingHorizontal: 10,
    paddingTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  articleAuthor: {
    padding: 10,
    fontSize: 14,
  },
  content: {
    padding: 10,
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
