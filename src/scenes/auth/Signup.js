import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Button from "../../components/Button";
import { colors } from "../../styles";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayPurple
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
});

class Signup extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>{`Sing up`}</Text>
        <Button
          title="Sign up"
          color="white"
          backgroundColor={colors.purple}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  }
}

Signup.propTypes = {
  navigation: PropTypes.object
};

Signup.defaultProps = {
  navigation: {}
};

export default Signup;
