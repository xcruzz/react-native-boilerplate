import React from 'react'
import { View } from 'react-native'
import { colors } from 'theme'
import ActiveLogo from '../../../components/ActiveLogo'

const HeaderTitle = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <ActiveLogo isHeader={true} />
  </View>
)

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
