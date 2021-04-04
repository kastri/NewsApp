import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  useColorScheme,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {newsAction} from '../actions/newsAction';
import Article from '../components/Article';

import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import SearchInput from '../components/SearchInput';

var searchTimeout;

function NewsScreen(props) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const newsReducer = useSelector(state => state.newsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsAction.setNewsLoading(true));
    dispatch(newsAction.getNews('apple'));
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, backgroundStyle]}>
        {newsReducer.loading ? (
          <ActivityIndicator size="large" color="#e91e63" />
        ) : (
          <View>
            <SearchInput
              onTextChange={text => {
                dispatch(newsAction.getNews(text));
              }}
            />

            {newsReducer.error !== '' ? (
              <Text style={styles.errorColor}>{newsReducer.error}</Text>
            ) : (
              <FlatList
                style={{flex: 1}}
                data={newsReducer.news}
                renderItem={({item}) => {
                  return <Article item={item} />;
                }}
              />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: 10,
    fontSize: 16,
  },
  errorColor: {
    width: Dimensions.get('window').width - 20,
    margin: 10,
    flex: 1,
    textAlign: 'center',
    color: 'red',
  },
  articleImage: {
    width: '100%',
    height: 58,
  },
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
