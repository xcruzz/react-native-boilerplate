import TownInfo from 'components/TownInfo'
import DistrictInfo from 'components/DistrictInfo'
import { colors, fonts } from 'theme'
import React from 'react'
import NationalList from '../../components/NationalList'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AButton from '../../components/ALugaroButton'
import TownTile from '../../components/TownTile'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  head: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
    marginBottom: 5,
    fontFamily: fonts.NeuePlak.Bold,
  },
  separator: {
    alignSelf: 'center',
    height: 2,
    width: '90%',
    backgroundColor: colors.victoryGold,
  },
  space: { height: 10 },
})

export default class Candidaturas extends React.Component {
  async componentDidMount() {}

  constructor(props) {
    super(props)
    this.state = {
      navigation: props.navigation,
      districtNumber: props.navigation.state.params.districtNumber,
      districtName: !props.navigation.state.params.townKey
        ? mvcdb.distritosS.find((d) => {
            return d.number == props.navigation.state.params.districtNumber
          }).name
        : null,
      townKey: props.navigation.state.params.townKey,
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        {this.state.townKey && (
          <View>
            <ScrollView>
              <NationalList />
              <TownInfo townKey={this.state.townKey} />

              <AButton
                title="Haz tu donación"
                onPressURL="https://www.mvcpr.org/donativos/"
                isDark={true}
              />
              <View style={styles.separator} />
              <Text style={styles.head}>Fin</Text>
            </ScrollView>
          </View>
        )}
        {this.state.districtNumber && (
          <View style={styles.root}>
            <View>
              <Text
                style={styles.head}
              >{`Distrito Senatorial ${this.state.districtName}`}</Text>
              <View style={styles.separator} />
            </View>
            <ScrollView>
              <View style={styles.space} />
              {mvcdb.pueblos
                .filter((p) => {
                  return p.distritoS
                    ? p.distritoS.find((number) => {
                        return number == this.state.districtNumber
                      })
                    : false
                })
                .map((dt, i) => {
                  if (
                    dt.key &&
                    mvcdb.candidatxs.find((c) => {
                      return c.pueblo && c.pueblo === dt.key
                    })
                  )
                    return <TownTile navigation={this.state.navigation} key={i} townKey={dt.key} />
                })}

              <DistrictInfo
                districtNumber={this.state.districtNumber}
                displayHeader={false}
              />
              <Text />
              <AButton
                title="Haz tu donación"
                onPressURL="https://www.mvcpr.org/donativos/"
                isDark={true}
              />
              <View style={styles.separator} />
              <Text style={styles.head}>Fin</Text>
            </ScrollView>
          </View>
        )}
      </View>
    )
  }
}
