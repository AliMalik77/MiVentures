import React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";

const SearchBar = ({ search, setSearch, handleButton }: any) => {
  const dispatch: any = useDispatch();

  const handleChange = (data: any) => {
    setSearch(data);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={handleChange}
      value={search}
      style={styles.search}
      // onIconPress={() => handleButton()}
      // onSubmitEditing={() => handleButton()}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    borderRadius: 50,
    borderColor: "black",
  },
});
