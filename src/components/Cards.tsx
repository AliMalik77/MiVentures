import * as React from "react";
import { View } from "react-native";
import { Avatar, Card } from "react-native-paper";

const CardComponent = ({ data, type }: any) => {
  return (
    <View>
      {data.type === "User" ? (
        <Card>
          <Card.Title title={data.login} />
          <Card.Cover source={{ uri: data.avatar_url }} />
        </Card>
      ) : (
        <Card>
          <Card.Title title={data.name} />
          <Card.Cover source={{ uri: data.owner.avatar_url }} />
        </Card>
      )}
    </View>
  );
};

export default CardComponent;
