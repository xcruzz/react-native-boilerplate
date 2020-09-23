import globalStyles from '../../theme/styles'
import { ScrollView } from 'react-native-gesture-handler'
import AgendaUrgente from 'components/AgendaUrgente'
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar } from 'react-native'

const styles = globalStyles.detailsPage

const Articulo = ({ navigation }) => {
  const { articleKey } = navigation.state.params

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Text style={styles.verb} />
        <Text style={styles.title}>VICTORIA CIUDADANA</Text>
        {
          articleKey == 'agenda_urgente' ? <AgendaUrgente /> : <Text></Text>
          //You can add more Article components here
          //Leave the empty <Text> as last always (default) and queue new option on top
          //eg. `articleKey == 'new_key' ? <NewArticleComponent /> :`
        }
      </ScrollView>
    </View>
  )
}

Articulo.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

Articulo.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default Articulo
