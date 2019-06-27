import React, { Component } from "react";
import { Text, View,TouchableOpacity,FlatList} from "react-native";
import styles from "../styles/DrawerStyles";
const screensList=["TaskList","ScreenOne","ScreenTwo"];
export default class DrawerScreen extends Component {

  onPress=(item)=>{
    const {navigate}=this.props.navigation;
     navigate(item);
     this.props.navigation.closeDrawer();
  }

  renderItem=(item)=>{
    return(<TouchableOpacity style={styles.item} onPress={()=>this.onPress(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>)
  }
  render() {
    return (
      <View style={styles.container}>
      <FlatList
          contentContainerStyle={{ padding: 5 }}
          data={screensList}
          renderItem={({ item }) => this.renderItem(item)}
        />
      
      </View>
    );
  }
}
