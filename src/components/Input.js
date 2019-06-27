import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/InputStyles";
import colors from "../utils/colors";
import { View, TextInput, Image } from "react-native";

class Input extends Component {
  onChange(val) {
    if (this.props.onChangeText) {
      this.props.onChangeText(val);
    }
  }
  onClear = () => {
    this.textInput.clear();
  };
  render() {
    return (
      <View style={this.props.inputContainer}>
        {this.props.srcLeft && (
          <Image
            source={this.props.srcLeft}
            style={this.props.iconStyle || styles.leftInlineImage}
          />
        )}
        <View style={styles.inputHolder}>
          <TextInput
            //value={this.props.value}
            {...this.props}
            ref={input => {
              this.textInput = input;
            }}
            style={this.props.style}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry}
            returnKeyType={this.props.returnKeyType}
            autoCapitalize={this.props.autoCapitalize}
            autoCorrect={this.props.autoCorrect}
            placeholderTextColor={this.props.placeholderTextColor}
            underlineColorAndroid={this.props.underlineColorAndroid}
            maxLength={this.props.maxLength}
            numberOfLines={this.props.numberOfLines}
            keyboardType={this.props.keyboardType}
            onChangeText={val => this.onChange(val)}
            editable={this.props.editable}
          />
        </View>
        {this.props.srcRight && (
          <Image source={this.props.srcRight} style={styles.rightInlineImage} />
        )}
      </View>
    );
  }
}

export default Input;

Input.propTypes = {
  inputContainer: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  srcLeft: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
  placeholderTextColor: PropTypes.any,
  underlineColorAndroid: PropTypes.string,
  srcRight: PropTypes.string,
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  numberOfLines: PropTypes.number,
  editable: PropTypes.bool,
  iconStyle: PropTypes.object
  //value: PropTypes.string
};

Input.defaultProps = {
  inputContainer: styles.borderContainer,
  style: styles.input,
  srcLeft: " ",
  placeholder: "Service Name",
  returnKeyType: "done",
  autoCapitalize: "none",
  autoCorrect: false,
  placeholderTextColor: colors.placeholderTextColor,
  underlineColorAndroid: "transparent",
  srcRight: " ",
  keyboardType: "default",
  numberOfLines: 1,
  editable: true
};
