import PropTypes from 'prop-types'
import globalStyles from '../../theme/styles'
import React from 'react'
import DistrictGrid from '../../components/DistrictGrid'
import NationalList from '../../components/NationalList'
import { View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const styles = globalStyles.candibrowser

const CandiBrowser = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View>
      <ScrollView>
        <NationalList />
        <DistrictGrid navigation={navigation}></DistrictGrid>
      </ScrollView>
    </View>
  </View>
)

CandiBrowser.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

CandiBrowser.defaultProps = {
  navigation: { navigate: () => null },
}

export default CandiBrowser
