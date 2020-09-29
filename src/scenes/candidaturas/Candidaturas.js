import TownInfo from 'components/TownInfo'
import globalStyles from '../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar } from 'react-native'

const styles = globalStyles.detailsPage

const Candidaturas = ({ navigation }) => {
  const { townKey } = navigation.state.params

  if (townKey) {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        {
          <TownInfo townKey={townKey} />
          /*<DistrictInfo townKey={townKey} />
        <NationalInfo townKey={townKey} /> */
        }
      </View>
    )
  }
}

Candidaturas.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

Candidaturas.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default Candidaturas
