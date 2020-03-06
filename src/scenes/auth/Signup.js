import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from '../../components/Button'
import { colors } from '../../styles'
import { authorize } from '../../utils/auth'
import Connector from '../../utils/connector'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
})

class Signup extends Component {
  handleSignup = async () => {
    const { actions } = this.props
    try {
      const { accessToken, me } = await authorize()
      actions.authenticate(accessToken, me)
    } catch (err) {
      console.log('[##] err', err)
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle='light-content' />
        <Text style={styles.title}>Sing up</Text>
        <Button
          title='Sign up'
          color='white'
          backgroundColor={colors.purple}
          onPress={this.handleSignup}
        />
      </View>
    )
  }
}

const ConnectedSignup = props => (
  <Connector>
    {
      ({ actions }) => (
        <Signup
          actions={actions.app}
          {...props}
        />
      )
    }
  </Connector>
)

Signup.propTypes = {
  actions: PropTypes.object
}

Signup.defaultProps = {
  actions: {}
}

export default ConnectedSignup