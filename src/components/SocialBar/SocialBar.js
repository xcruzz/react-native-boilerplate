import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import ImgButton from '../../components/ImgButton'
import { images } from 'theme'

const styles = {
  root: {
    flex: 0,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
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
        <ImgButton
          styles={styles.icon}
          onPressURL={`https://www.facebook.com/${fbHandle}`}
          imgSource={images.fb_icon}
        />
      ) : (
        <Text />
      )}
      {twitterHandle ? (
        <ImgButton
          styles={styles.icon}
          onPressURL={`https://twitter.com/${twitterHandle}`}
          imgSource={images.twitter_icon}
        />
      ) : (
        <Text />
      )}
      {igHandle ? (
        <ImgButton
          styles={styles.icon}
          onPressURL={`https://www.instagram.com/${igHandle}`}
          imgSource={images.ig_icon}
        />
      ) : (
        <Text />
      )}
      {emailAddr != null ? (
        <ImgButton
          styles={styles.icon}
          onPressURL={`mailto:${emailAddr}`}
          imgSource={images.email_icon}
        />
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
