import { MlTextfieldProps } from "@mono-repo-demo/atomic-library";
import { Pressable, Text, TextInput, View } from "react-native";

import SearchIcon from "@mono-repo-demo/atomic-library/assets/SearchIcon";

export const MlTextfield = ({ value, onChange }: MlTextfieldProps) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        height: 40,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TextInput value={value} onChangeText={onChange} />
      <Pressable>
        <SearchIcon color="#BDC6CF" />
      </Pressable>
    </View>
  );
};
