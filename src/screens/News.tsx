import React, {useEffect} from 'react';
import {StyleSheet, View, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {newsAction} from '../actions/newsAction';

import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

function NewsScreen(props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const newsReducer = useSelector(state => state.newsReducer);
  console.log('news');
  console.log(newsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsAction.getNews(''));
  }, []);
  return (
    <View style={[styles.container, backgroundStyle]}>
      <Text>{'loading'}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const mapStateToProps = state => ({
  news: state.newsReducer.news,
  loading: state.newsReducer.loading,
  error: state.newsReducer.error,
});

const mapDispatchToProps = dispatch => ({
  fetchNews: query => {
    dispatch(newsAction.getNews(query));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsScreen);
