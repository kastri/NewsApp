import * as React from 'react';
import {StyleSheet, View, TextInput, Dimensions} from 'react-native';

var searchTimeout;
export default function SearchInput({onTextChange}) {
  const [searchArticle, setSearchArticle] = React.useState('apple');

  return (
    <TextInput
      placeholder="Search for articles"
      value={searchArticle}
      style={styles.articleInput}
      onChangeText={text => {
        setSearchArticle(text);
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          onTextChange(text);
        }, 300);
      }}
    />
  );
}
const styles = StyleSheet.create({
  articleInput: {
    width: Dimensions.get('window').width - 20,
    height: 50,
    margin: 10,
    padding: 10,
    borderColor: '#e3e3e3',
    borderRadius: 10,
    borderWidth: 2,
  },
});
