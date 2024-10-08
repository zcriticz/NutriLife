import { registerRootComponent } from "expo";

import { View, Text } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Index</Text>
    </View>
  );
}
registerRootComponent(Index);
