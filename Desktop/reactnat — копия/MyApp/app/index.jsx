import { Text, View, StyleSheet, Platform } from "react-native";

export default function Index() {
  const name = "Asqar";
  const skills = ['js', 'react', 'react-native'];

  console.log("homescreen render", Platform.OS);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>чойро даяр</Text>
      <Text>ОС: {Platform.OS}</Text>
      <Text>Version: {String(Platform.Version)}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
justifyContent: "center",
},
});