import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

type propsType = {
  color?: string;
};

const ListItemSeparator: React.FC<propsType> = ({ color }) => {
  // fixed: style prop must be an array, not mixed with comma
  return (
    <View
      style={[
        styles.separator,
        { backgroundColor: color || colors.theme.light.text },
      ]}
    />
  );
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: "100%",
  },
});
