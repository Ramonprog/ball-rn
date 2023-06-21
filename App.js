import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function App() {
  const handleForceButton = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.area}></View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpeForce:</Text>
          <Text style={styles.controlText}>Velocity:</Text>
          <Text style={styles.controlText}>PostY</Text>
        </View>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceButton}
        >
          <Text style={styles.controlbuttonText}>Fazer foça</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
