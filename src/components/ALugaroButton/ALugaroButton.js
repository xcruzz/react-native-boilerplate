import NetInfo from '@react-native-community/netinfo'
import { colors } from 'theme'
import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, Linking } from 'react-native'

const styles = {
  button: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonDark: {
    backgroundColor: colors.black,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: colors.gray,
    paddingVertical: 10,
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
  },
  verbDark: {
    color: '#fff',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 18,
  },
  verb: {
    color: '#000',
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 18,
  },
}

const ALugaroButton = ({
  title,
  onPressURL,
  onPressNavigate,
  navigationProps,
  isDisabled,
  isDark,
}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          if (!isDisabled)
            if (onPressURL) {
              NetInfo.fetch().then((state) => {
                if (state.isConnected || !onPressNavigation) {
                  Linking.openURL(onPressURL)
                } else {
                  onPressNavigation.navigate(onPressNavigate, navigationProps)
                }
              })
            } else {
              onPressNavigate.navigate(navigationProps.to, navigationProps)
            }
        }}
        style={
          isDisabled
            ? styles.disabled
            : isDark
            ? styles.buttonDark
            : styles.button
        }
      >
        <Text style={isDark ? styles.verbDark : styles.verb}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

ALugaroButton.propTypes = {
  title: PropTypes.string,
  onPressURL: PropTypes.string,
  onPressNavigate: PropTypes.object,
  navigationProps: PropTypes.object,
  isDisabled: PropTypes.bool,
  isDark: PropTypes.bool,
}

ALugaroButton.defaultProps = {
  title: null,
  onPressURL: null,
  onPressNavigate: null,
  navigationProps: null,
  isDisabled: false,
  isDark: false,
}

export default ALugaroButton
