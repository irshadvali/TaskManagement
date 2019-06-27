import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/MenuItemStyles";
import { capitalize } from "../utils/Utils";
import PropTypes from "prop-types";
const MenuItem = props => {
  const { dishName, price, rating } = props;
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <Text style={styles.dish}>{capitalize(dishName)}</Text>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <Text>{`\u20B9${price}`}</Text>
    </View>
  );
};
export default MenuItem;

MenuItem.propTypes = {
  dishName: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number
};
