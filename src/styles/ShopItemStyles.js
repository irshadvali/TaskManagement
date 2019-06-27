import { StyleSheet } from "react-native";

const ShopItemStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    flex: 1,
    flexDirection: "row",
    borderRadius: 3,
    marginBottom: 5
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 3
  },
  horizontalLayout: {
    marginLeft: 10
  },

  title: {
    color: "#1E90FF",
    fontSize: 15,
    fontFamily: "Roboto-Medium"
  },
  language: {
    color: "#555",
    fontSize: 13,
    marginLeft: 5
  },
  count: {
    color: "#555",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    marginLeft: 2
  }
});

export default ShopItemStyles;
