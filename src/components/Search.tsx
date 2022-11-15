import React from 'react';
import {Searchbar} from 'react-native-paper';

type SearchProps = {
  searchQuery: any;
  setSearchQuery: (val: any) => void;
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
      style={{borderRadius: 9}}
    />
  );
};

export default Search;
