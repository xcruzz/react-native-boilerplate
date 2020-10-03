import React from 'react'
import PropTypes from 'prop-types'
import { Linking, Image, Text, View, TouchableOpacity } from 'react-native'
import { images } from 'theme'

const styles = {
  root: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 9,
  },
  icon: {
    width: 60,
    height: 30,
  },
}

const SocialBar = ({ fbHandle, twitterHandle, igHandle, emailAddr }) => {
  return (
    <View style={styles.root}>
      {fbHandle ? (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`https://www.facebook.com/${fbHandle}`)
          }}
        >
          <Image style={styles.icon} source={images.fb_icon} />
        </TouchableOpacity>
      ) : (
        <Text />
      )}
      {twitterHandle ? (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`https://www.facebook.com/${twitterHandle}`)
          }}
        >
          <Image style={styles.icon} source={images.twitter_icon} />
        </TouchableOpacity>
      ) : (
        <Text />
      )}
      {igHandle ? (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`https://www.facebook.com/${igHandle}`)
          }}
        >
          <Image style={styles.icon} source={images.ig_icon} />
        </TouchableOpacity>
      ) : (
        <Text />
      )}
      {emailAddr != null ? (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`mailto:${emailAddr}`)
          }}
        >
          <Image style={styles.icon} source={images.email_icon} />
        </TouchableOpacity>
      ) : (
        <Text />
      )}
    </View>
  )
}

SocialBar.propTypes = {
  fbUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  igUrl: PropTypes.string,
}

SocialBar.defaultProps = {
  fbUrl: null,
  twitterUrl: null,
  igUrl: null,
}

export default SocialBar
