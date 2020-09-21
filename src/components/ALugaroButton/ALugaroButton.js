import NetInfo from '@react-native-community/netinfo'
import { colors } from 'theme'
import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, Linking } from 'react-native'

const styles = {
  button: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
}

const ALugaroButton = ({
  title,
  onPressURL,
  onPressNavigate,
  navigationProps,
}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          NetInfo.fetch().then((state) => {
            if (state.isConnected || !onPressNavigation) {
              Linking.openURL(onPressURL)
            } else {
              onPressNavigation.navigate(onPressNavigate, navigationProps)
            }
          })
        }}
        style={styles.button}
      >
        <Text style={styles.center}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

ALugaroButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  onPressNavigate: PropTypes.object,
  navigationProps: PropTypes.object,
}

ALugaroButton.defaultProps = {
  title: null,
  onPress: () => {},
  onPressNavigate: null,
  navigationProps: null,
}

export default ALugaroButton
