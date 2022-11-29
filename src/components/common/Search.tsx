import React from 'react';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

type SearchProps = {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
};

const Search = ({searchQuery, setSearchQuery}: SearchProps) => {
  const handleChange = (data: any) => {
    setSearchQuery(data);
  };

  return (
    <Searchbar
      placeholder="Find a startup..."
      onChangeText={handleChange}
      value={searchQuery}
      iconColor={'#377BF5'}
      style={styles.search}
    />
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {borderRadius: 9},
});
