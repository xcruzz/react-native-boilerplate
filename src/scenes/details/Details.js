import { ScrollView } from 'react-native-gesture-handler'
import AgendaUrgente from 'components/AgendaUrgente'
import ProgramaDeGobierno from 'components/ProgramaDeGobierno'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  StatusBar,
  Platform,
  Image,
  StyleSheet,
} from 'react-native'
import { images, fonts, colors } from 'theme'
import TownInfo from 'components/TownInfo'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
})
const ttStyle = {
  title: {
    fontSize: 26,
    alignSelf: 'center',
    fontFamily: fonts.NeuePlak.Black,
  },
  modalView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  holder: {
    flex: 1, //must
  },
  logo: {
    width: 30,
    height: 34,
    marginBottom: 5,
    marginRight: 10,
  },
  header: {
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
}

const Details = ({ navigation }) => {
  const { articleKey, townKey, townName } = navigation.state.params

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      {Platform.OS === 'ios' ? <Text style={styles.verb} /> : <View />}
      {
        articleKey == 'programadegobierno' ? (
          <ScrollView>
            <ProgramaDeGobierno />
          </ScrollView>
        ) : articleKey == 'town_tile' ? (
          <View style={ttStyle.holder}>
            <View style={ttStyle.header}>
              <Image style={ttStyle.logo} source={images['logo_negro']} />
              <Text style={ttStyle.title}>{townName}</Text>
            </View>
            <ScrollView scrollEventThrottle={32}>
              <View style={ttStyle.modalView}>
                <TownInfo renderHeader={false} townKey={townKey} />
              </View>
            </ScrollView>
          </View>
        ) : articleKey == 'agenda_urgente' ? (
          <ScrollView>
            <AgendaUrgente />
          </ScrollView>
        ) : (
          <Text></Text>
        )
        //You can add more Article components here
        //Leave the empty <Text> as last always (default) and queue new option on top
        //eg. `articleKey == 'new_key' ? <NewArticleComponent /> :`
      }
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
