import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { images } from 'theme'

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 38,
  },
  logo90: {
    width: 32,
    height: 38,
    transform: [{ rotate: '270deg' }],
  },
})

const HeaderTitle = () => (
  <Image source={images.victoria_icon_white} style={styles.logo} />
)

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
