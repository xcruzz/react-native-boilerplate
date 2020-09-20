import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { images } from 'theme'

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
  logo90: {
    width: 32,
    height: 32,
    transform: [{ rotate: '270deg' }],
  },
})

const HeaderTitle = () => (
  <Image source={images.logo_blanco} style={styles.logo} />
)

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
