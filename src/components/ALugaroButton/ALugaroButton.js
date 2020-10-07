import NetInfo from '@react-native-community/netinfo'
import { colors, fonts } from 'theme'
import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, Linking } from 'react-native'

const styles = {
  button: {
    backgroundColor: colors.victoryGold,
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 20,
    width: 165,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonDark: {
    backgroundColor: colors.black,
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 20,
    width: 165,
    alignItems: 'center',
    marginVertical: 10,
  },
  disabled: {
    backgroundColor: colors.gray,
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 20,
    width: 165,
    alignItems: 'center',
    marginVertical: 10,
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verbDark: {
    color: '#fff',
    fontFamily: fonts.NeuePlak.Bold,
    fontSize: 16,
    paddingBottom: 3,
  },
  verb: {
    color: colors.black,
    fontFamily: fonts.NeuePlak.Black,
    fontSize: 16,
    paddingBottom: 3,
  },
}

const ALugaroButton = ({
  title,
  onPressURL,
  onPressNavigate,
  navigationProps,
  isDisabled,
  isDark,
  onPress,
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
                } else if (onPressNavigate) {
                  onPressNavigation.navigate(onPressNavigate, navigationProps)
                }
              })
            } else if (onPressNavigate) {
              onPressNavigate.navigate(navigationProps.to, navigationProps)
            }
          onPress()
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
  onPress: PropTypes.func,
  onPressURL: PropTypes.string,
  onPressNavigate: PropTypes.object,
  navigationProps: PropTypes.object,
  isDisabled: PropTypes.bool,
  isDark: PropTypes.bool,
}

ALugaroButton.defaultProps = {
  title: null,
  onPress: () => {},
  onPressURL: null,
  onPressNavigate: null,
  navigationProps: null,
  isDisabled: false,
  isDark: false,
}

export default ALugaroButton
