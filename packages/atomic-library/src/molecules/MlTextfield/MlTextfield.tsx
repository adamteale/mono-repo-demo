import { Pressable, Text, TextInput, View } from "react-native";

import { MlTextfieldProps } from "..";

import { useState } from "react";
import SearchIcon from "../../assets/SearchIcon";

export const MlTextfield = ({
  placeholder,
  value,
  onChange,
  accessibilityLabel,
  accessibilityRole,
  testID,
}: MlTextfieldProps) => {
  const [currentText, setCurrentText] = useState(value);

  const handleOnChangeText = (text: string) => {
    setCurrentText(text);
    onChange(text);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        height: 40,
        width: "100%",
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TextInput
        value={currentText}
        onChangeText={handleOnChangeText}
        placeholder={placeholder}
        style={{
          flex: 1,
          marginHorizontal: 8,
        }}
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
      />
      <Pressable accessibilityRole="button">
        <SearchIcon color="#BDC6CF" />
      </Pressable>
    </View>
  );
};
