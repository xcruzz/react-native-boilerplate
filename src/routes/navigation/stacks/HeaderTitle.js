import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
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
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Image source={images.logo_blanco} style={styles.logo} />
  </View>
)

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
