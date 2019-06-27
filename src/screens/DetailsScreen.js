import React, { Component } from "react";
import { View, FlatList, Image, ScrollView, Text } from "react-native";
import ToggleSwitch from "../components/ToggleSwitch";
import MenuItem from "../components/MenuItem";
import styles from "../styles/DetailsScreenStyles";
export default class DetailsScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      data: props.navigation.state.params.item||[],
      veg: props.navigation.state.params.item.menu_list
        ? props.navigation.state.params.item.menu_list[0].Veg
        : [],
      nonVeg: props.navigation.state.params.item.menu_list
        ? props.navigation.state.params.item.menu_list[0].nonVeg
        : [],
      isVeg: false
    };
  }
  toggleSwitch = value => {
    this.setState({ isVeg: value });
  };
  renderMenuItem = item => {
    return (
      <MenuItem
        dishName={item.dish_name}
        price={item.price}
        rating={item.rating}
      />
    );
  };
  renderSeparator = () => {
    return <View style={styles.divider} />;
  };
  render() {
    const { veg, nonVeg, data, isVeg } = this.state;
    let fullMenu;
    if (veg.length > 0 && nonVeg.length > 0) {
      fullMenu = [...veg, ...nonVeg];
    }

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: data.image_url }} style={styles.headerImage} />
        <View style={styles.horizontalItem}>
          <Text style={styles.isVeg}>Veg only</Text>
          <ToggleSwitch toggleSwitch={this.toggleSwitch} value={isVeg} />
        </View>
        <View style={styles.divider} />
        <Text style={styles.headerMenu}>Menu</Text>
        <View style={styles.divider} />
        {veg.length > 0 || nonVeg.length > 0 ? (
          <FlatList
            data={isVeg ? veg : fullMenu}
            extraData={this.state}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({ item }) => this.renderMenuItem(item)}
            ItemSeparatorComponent={this.renderSeparator}
          />
        ) : (
          <View />
        )}
      </ScrollView>
    );
  }
}
