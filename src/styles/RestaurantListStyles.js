import { StyleSheet } from "react-native";

const RestaurantListStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d3d3d3"
      },
loaderContainer:{
    flex: 1, justifyContent: "center", alignItems: "center"
},
loaderText:{
  fontSize:14,
  marginTop:15,
  fontFamily:"Roboto-MediumItalic",
}
});

export default RestaurantListStyles;
