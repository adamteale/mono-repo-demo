import { Pressable, Text, TextInput, View } from "react-native";

import { MlTextfieldProps } from "..";
import SearchIcon from "@mono-repo-demo/atomic-library/assets/SearchIcon";

export const MlTextfield = ({
  placeholder,
  value,
  onChange,
}: MlTextfieldProps) => {
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
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
      />
      <Pressable>
        <SearchIcon color="#BDC6CF" />
      </Pressable>
    </View>
  );
};
