import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <View>
          <TextInput placeholder='Your Course Goal' />
          <Button title="Add Goal" />
        </View>
        <View>
          <Text>Goals:</Text>
        </View>
      </View>
    </View>
  );
}

// below --- makes styling reusable
const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
});

// NO CSS IN REACT NATIVE --- CAN APPLY STYLES BUT DOING IT INLINE STYLES OR STYLESHEET OBJECTS ---

// APP.JS IS THE ROOT COMPONENT IN THE APP
