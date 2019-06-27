import React,{Component} from "react";
import {View,Text} from "react-native";

export default class ScreenOne extends Component{
    static navigationOptions={
        header:null
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>ScreenOne</Text>
            </View>
        )
    }
}