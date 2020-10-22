import globalStyles from '../../theme/styles'
import { ScrollView } from 'react-native-gesture-handler'
import AgendaUrgente from 'components/AgendaUrgente'
import ProgramaDeGobierno from 'components/ProgramaDeGobierno'
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar, Platform, Image } from 'react-native'
import { images, fonts, colors } from 'theme'
import TownInfo from 'components/TownInfo'

const styles = globalStyles.detailsPage
const ttStyle = {
  title: {
    fontSize: 26,
    marginBottom: 0,
    alignSelf: 'center',
    fontFamily: fonts.NeuePlak.CondExtraBlack,
  },modalView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },holder: {
    flex: 1, //must
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
  },
  space: {
    alignSelf: 'center',
    height: 25,
    marginTop: 10,
    backgroundColor: colors.white,
  },
  logo: {
    width: 30,
    height: 34,
    marginBottom: 5,
    marginRight: 10,
  },header: {
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
      <ScrollView>
        {/* <Text style={styles.verb} /> */}
        {/* <Text style={styles.title}>
          {'Movimiento Victoria Ciudadana'.toUpperCase()}
        </Text> */}
        {
          articleKey == 'programadegobierno' ? (
            <ProgramaDeGobierno />
          ) : articleKey == 'town_tile' ? (
            <View style={ttStyle.holder}>
            {Platform.OS === 'ios' && <View style={styles.space} />}
            <View style={ttStyle.header}>
              <Image style={ttStyle.logo} source={images['logo_negro']} />
              <Text style={ttStyle.title}>{townName}</Text>
            </View>
            <ScrollView
              scrollEventThrottle={32}              
            >
              <View style={styles.modalView}>
                <TownInfo renderHeader={false} townKey={townKey} />
              </View>
            </ScrollView>
          </View>
          ): articleKey == 'agenda_urgente' ? (
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
