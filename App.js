import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>Goals:</Text>
      </View>
    </View>
  );
}

// below --- makes styling reusable
const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "ccc",
    width: "80%",
    marginRight: 8,
    padding: 8
  }
});

// NO CSS IN REACT NATIVE --- CAN APPLY STYLES BUT DOING IT INLINE STYLES OR STYLESHEET OBJECTS --- FLEXBOX IS IMPORTANT ---

// APP.JS IS THE ROOT COMPONENT IN THE APP
