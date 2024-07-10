import React from "react";
import { Text, View } from "react-native";
import {
  Vocabulary,
  Listening,
  Reading,
  Memory,
  Writing,
} from "../components/bodyComponent";

const Body = ({ route, navigation }) => {
  const { component } = route.params;

  const renderComponent = () => {
    switch (component) {
      case "_Vocabulary":
        return (
          <Vocabulary
            goBack={() => navigation.goBack()}
            backgroundColor={"#6495ED"}
            title={"KÖRPER"}
          />
        );
      case "_Listening":
        return (
          <Listening
            goBack={() => navigation.goBack()}
            backgroundColor={"#41cf57"}
            title={"KÖRPER"}
          />
        );
      case "_Reading":
        return (
          <Reading
            goBack={() => navigation.goBack()}
            backgroundColor={"#fb63dc"}
            title={"KÖRPER"}
          />
        );
      case "_Memory":
        return (
          <Memory
            goBack={() => navigation.goBack()}
            backgroundColor={"#e98f00"}
            title={"KÖRPER"}
          />
        );
      case "_Writing":
        return (
          <Writing
            goBack={() => navigation.goBack()}
            backgroundColor={"#e6584c"}
            title={"KÖRPER"}
          />
        );
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderComponent()}</View>;
};
export default Body;
