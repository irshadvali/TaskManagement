import { StyleSheet } from "react-native";
import colors from "../utils/colors";
const DetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 20
  },
  headerImage: {
    width: "100%",
    height: 250
  },
  horizontalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 10,
    alignItems: "center"
  },
  isVeg: {
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  },
  headerMenu: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 15,
    fontFamily: "Roboto-Medium"
  },
  divider: {
    height: 1,
    marginHorizontal: 10,
    backgroundColor: colors.divider
  }
});

export default DetailsScreenStyles;
