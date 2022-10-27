import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

type HomeScreenProps = {
  navigation: any;
};

function Home({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to our Home Screen</Text>
      {/* <Pressable
        onPress={() => navigation.navigate("Story")}
        style={{
          backgroundColor: "plum",
          marginBottom: 10,
          marginTop: 10,
          padding: 10,
        }}
      >
        <Text>Story</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("ContactUS")}
        style={{
          backgroundColor: "plum",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Text>Contact Us</Text>
      </Pressable> */}
      <Pressable
        onPress={() => navigation.navigate("Splash")}
        style={{
          backgroundColor: "plum",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Text>Splash</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text>User must be logged in to view Story Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 30,
  },
});

export default Home;
