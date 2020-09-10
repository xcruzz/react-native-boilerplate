import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AgendaUrgente from 'components/AgendaUrgente'
import * as RDR from 'components/RedDeRedes'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blanco,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Details = ({ navigation }) => {
  const { articleKey } = navigation.state.params

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        {
          articleKey == 'sindicatos' ? (
            <RDR.Sindicatos />
          ) : articleKey == 'deportes' ? (
            <RDR.Deportes />
          ) : articleKey == 'desigualdad' ? (
            <RDR.Desigualdad />
          ) : articleKey == 'gobierno' ? (
            <RDR.Gobierno />
          ) : articleKey == 'salud' ? (
            <RDR.Salud />
          ) : articleKey == 'cultura' ? (
            <RDR.Cultura />
          ) : articleKey == 'comunicaciones' ? (
            <RDR.Comunicaciones />
          ) : articleKey == 'ecologia' ? (
            <RDR.Ecologia />
          ) : articleKey == 'educacion' ? (
            <RDR.Educacion />
          ) : articleKey == 'lgbttiq' ? (
            <RDR.LGBTTIQ />
          ) : articleKey == 'economia' ? (
            <RDR.Economia />
          ) : articleKey == 'juventud' ? (
            <RDR.Juventud />
          ) : articleKey == 'diaspora' ? (
            <RDR.Diaspora />
          ) : articleKey == 'agenda_urgente' ? (
            <AgendaUrgente />
          ) : (
            <Text></Text>
          )
          //You can add more Article components here
          //Leave the empty <Text> as last always (default) and queue new option on top
          //eg. `articleKey == 'new_key' ? <NewArticleComponent /> :`
        }
      </ScrollView>
    </View>
  )
}

Details.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
}

export default Details
