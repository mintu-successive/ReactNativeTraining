import React from 'react';
import SearchResultsScreen from '../view/SearchResults';

const SearchResultsViewModel = (props: any) => {
  const {navigation} = props;
  return <SearchResultsScreen navigation={navigation} />;
};

export default SearchResultsViewModel;
