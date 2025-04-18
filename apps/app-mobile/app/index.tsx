import { View } from "react-native";
import { DemoScreen } from "@Presentation/DemoScreen/DemoScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DemoScreen message="Hello from the mobile!" />
    </View>
  );
}
