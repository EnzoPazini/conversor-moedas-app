import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "./src/button";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View>
        <Text>Conversor de Moedas</Text>
        <Text>Converta valores em diferentes moedas</Text>
      </View>

      <View>
        <Text>
          De:
          <button>USD</button>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
