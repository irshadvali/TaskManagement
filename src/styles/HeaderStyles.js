import { StyleSheet } from "react-native";
import colors from "../utils/colors";
const HeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.statusbarColor
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center"
  },
  left: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBox: {
    paddingHorizontal: 30,
    marginTop: 10
  },
  textInput: {
    height: 45,
    width: "100%",
    padding: 5,
    color: "#FFF",
    backgroundColor: colors.searchInputColor,
    borderRadius: 3
  },
  right: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  headerItem: {
    height: 45,
    textAlignVertical: "center",
    color: "white",
    paddingHorizontal: 30,
    fontSize: 15
  },
  divider: {
    height: 1,
    marginHorizontal: 30,
    backgroundColor: "rgba(255,255,255,0.5)"
  }
});

export default HeaderStyles;
