import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="CLICK HERE" />
    </View>
  );
}

// below --- makes styling reusable
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "green",
    padding: 16,
    borderRadius: 10,
    color: "white",
    backgroundColor: "blue",
  },
});

// NO CSS IN REACT NATIVE --- CAN APPLY STYLES BUT DOING IT INLINE STYLES OR STYLESHEET OBJECTS ---

// APP.JS IS THE ROOT COMPONENT IN THE APP
