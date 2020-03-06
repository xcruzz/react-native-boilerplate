import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import Button from '../../components/Button'
import { colors } from '../../styles'
import Connector from '../../utils/connector'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  }
})

class Home extends Component {
  render() {
    const { navigation, me } = this.props
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <Image
          style={styles.image}
          source={{ uri: me.picture }}
        />
        <Text style={styles.title}>{`Hello ${me.nickname}`}</Text>
        <Button
          title="Go to Details"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Details', { from: 'Home' })
          }}
        />
      </View>
    )
  }
}

const ConnectedHome = props => (
  <Connector>
    {
      ({ actions, state: { app: { me } } }) => (
        <Home
          actions={actions.app}
          me={me}
          {...props}
        />
      )
    }
  </Connector>
)

Home.propTypes = {
  navigation: PropTypes.object,
}

Home.defaultProps = {
  navigation: {},
}

export default ConnectedHome
