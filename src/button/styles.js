import { StyleSheet } from "react-native";
import colors from "../config/colors"; 

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 4,
    borderRadius: 5,
    alignItems: "center",
  }

  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonPrimary: {
    backgroundColor: colors.primary,
  },

  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
});