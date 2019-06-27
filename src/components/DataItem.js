import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/ShopItemStyles";
import Icon from "react-native-vector-icons/Ionicons";
export default class DataItem extends Component {
  onPress = () => {
    this.props.onPress && this.props.onPress();
  };
  render() {
    const { shopName, contact, imageSource, distance } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={{ uri: imageSource }} style={styles.image} />
        <View style={styles.horizontalLayout}>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.title}>
            {shopName}
          </Text>
          <Text style={styles.count}>{`Contact: ${contact}`}</Text>
          <Text style={styles.count}>Distance: {distance && distance.toFixed(3)} KM</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
DataItem.propTpes = {
  shopName: PropTypes.string,
  contact: PropTypes.number,
  imageSource: PropTypes.string,
  distance: PropTypes.number,
  onPress: PropTypes.func
};
DataItem.defaultProps = {};
