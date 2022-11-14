import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

type SearchProps = {
  searchQuery: any;
  setSearchQuery: (val: any) => void;
};

const Search = ({searchQuery, setSearchQuery}: SearchProps) => {
  // const [searchQuery, setSearchQuery] = React.useState('');
  //   const onChangeSearch = query => setSearchQuery(query);
  const [search, setSearch] = useState(null);
  const handleChange = (data: any) => {
    console.log('data in search', search);

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

const styles = StyleSheet.create({});
