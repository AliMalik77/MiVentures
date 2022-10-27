import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../components/Search";
import CardComponent from "../components/Cards";
import { setSearchQuery } from "../redux/actions/AuthAction";
import axios from "axios";
import LinearGradient from "react-native-linear-gradient";

//#48BFAE
//841584
type SearchScreenProps = {
  navigation: any;
};

const RepoSearch = ({ navigation }: SearchScreenProps) => {
  const searchData = useSelector((state: any) => state.auth.search);
  const typeSearch = useSelector((state: any) => state.auth.type);
  const state = useSelector((state: any) => state);
  const [search, setSearch] = useState<any>();

  console.log("states get from ", state);

  const [cards, setCards] = useState<any[]>([]);
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (searchData !== null) {
      const queryStr = `https://api.github.com/search/repositories?q=${searchData}`;
      axios.get(queryStr).then((res) => {
        // console.log("repositories with this name is  ", res.data.items);
        setCards(res.data.items);
      });
    }
  }, [searchData]);

  const handleSearchData = async () => {
    if (search.length > 0) {
      dispatch(setSearchQuery(search));
    }
  };

  const handleBack = () => {
    setCards([]);
    dispatch(setSearchQuery(null));
  };

  return (
    <>
      {!cards.length ? (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require("../../assets/giti.png")}
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
            ></Image>

            <Text style={styles.textSize}>GITHUB SEARCH</Text>
          </View>

          <View style={styles.dropdown}>
            <SearchBar search={search} setSearch={setSearch} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handleSearchData()}>
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.back}
              >
                <Text style={styles.searchText}>Search</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <View>
            <FlatList
              data={cards}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <CardComponent
                    data={item}
                    type={typeSearch}
                    setCards={setCards}
                  />
                );
              }}
              extraData={cards}
              ListFooterComponent={() => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                  }}
                >
                  <View style={styles.button}>
                    <TouchableOpacity onPress={handleBack}>
                      <LinearGradient
                        colors={["#08d4c4", "#01ab9d"]}
                        style={styles.back}
                      >
                        <Text style={styles.searchText}>Back</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </>
      )}
    </>
  );
};

export default RepoSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  dropdown: {
    marginBottom: 80,
  },
  search: {
    // flex: 3,
  },
  header: {
    marginBottom: 50,
    alignItems: "center",
  },
  textSize: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
    bottom: 30,
  },
  back: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  searchText: {
    color: "#fff",
  },
});
