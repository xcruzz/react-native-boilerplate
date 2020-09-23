import TownInfo from 'components/TownInfo'
import globalStyles from '../../theme/styles'
import { ScrollView } from 'react-native-gesture-handler'
// import AgendaUrgente from '../articulo/node_modules/components/AgendaUrgente'
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar } from 'react-native'

const styles = globalStyles.detailsPage

const NewsFeed = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Text>News Feed</Text>
      </ScrollView>
    </View>
  )
}

NewsFeed.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

NewsFeed.defaultProps = {
  navigation: {
    state: {
      params: {
        from: 'NewsFeed',
      },
    },
    goBack: () => null,
  },
}

export default NewsFeed
