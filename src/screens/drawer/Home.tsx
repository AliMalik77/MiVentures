import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
const Home = ({
  navigation,
}: {
  navigation: NavigationProp<{
    Notifications: undefined;
  }>;
}) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
