import { dataType } from "@/data/appData";
import colors from "@/styles/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";

// declare data type for props here

type propsType = {
  item: dataType;
  isSelected: boolean;
  onPress: (input: dataType) => void;
};

const ListItem: React.FC<propsType> = ({item, isSelected, }) => {
  return(
    <TouchableOpacity 
      onPress={() => itemSelected(item)}>
                <View
                  style={[
                    styles.flatListRow,
                    {
                      backgroundColor:
                        item.id === selectedId
                          ? colors.primary
                          : colors.secondary,
                    },
                  ]}
                >
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
  )>;
};

export default ListItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.secondary,
    padding: 5,
    height: 60,
    width: 350,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 5,
  },
  text: {
    color: colors.text.dark,
    fontSize: 20,
  },
});
