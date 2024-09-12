import { Pressable, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

async function fetchHello() {
  const response = await fetch("/api/posts");
  const data = await response.json();
  alert(JSON.stringify(data));
}

export default function TabOneScreen() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text>{process.env.TEST}</Text>
      <Text>{apiUrl}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Pressable onPress={() => fetchHello()}>
        <Text>Test API</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
