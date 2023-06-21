import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  area: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
  },
  control: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    margin: 20,
  },
  controlText: {
    color: "#fff",
  },
  controlButton: {
    flex: 1,
    height: 100,
    backgroundColor: "#0061ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  controlbuttonText: {
    color: "#fff",
  },
});
