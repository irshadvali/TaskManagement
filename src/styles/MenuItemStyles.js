import { StyleSheet } from "react-native";

const MenuItemStyles = StyleSheet.create({
  container: {
    padding: 10
  },
  dish: {
    fontFamily: "Lato-Regular",
    fontSize: 15
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  rating: {
    width: 25,
    height: 20,
    backgroundColor: "red",
    textAlign: "center",
    fontFamily: "Lato-Regular",
    color: "white",
    borderRadius: 2,
    fontSize: 12
  },
  price: {
    fontFamily: "Lato-Regular",
    fontSize: 14
  }
});

export default MenuItemStyles;
