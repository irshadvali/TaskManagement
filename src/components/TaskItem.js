import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/ShopItemStyles";
import Icon from "react-native-vector-icons/Ionicons";
export default class TaskItem extends Component {
  onPress = () => {
    this.props.onPress && this.props.onPress();
  };
  render() {
    const { taskName, description, location } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <View style={styles.horizontalLayout}>
          <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.title}>
            {taskName}
          </Text>
          <Text style={styles.count}>{description}</Text>
          <Text style={styles.count}>Distance: {location} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
TaskItem.propTpes = {
  taskName: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  onPress: PropTypes.func
};
TaskItem.defaultProps = {};
