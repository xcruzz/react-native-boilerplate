import React from 'react'
import { View } from 'react-native'
import ActiveLogo from '../../../components/ActiveLogo'

const HeaderTitle = () => (
  <View style={{ flex: 1, alignSelf: 'flex-start' }}>
    <ActiveLogo />
  </View>
)

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
