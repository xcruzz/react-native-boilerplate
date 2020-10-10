import CandiTile from '../CandiTile'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import { colors, fonts } from 'theme'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  root: {
    flex: 0,
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 9,
    backgroundColor: colors.white,
  },
  head: {
    fontSize: 26,
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    fontFamily: fonts.NeuePlak.Bold,
  },
  separator: {
    alignSelf: 'center',
    height: 2,
    width: '95%',
    backgroundColor: colors.victoryGold,
  },
  space: { height: 40 },
})

export default class DistrictInfo extends React.Component {
  constructor(props) {
    super(props)
    let currentDistricts = null

    if (props.townKey && props.townKey != '') {
      let town = []
      town = mvcdb.pueblos.find((p) => {
        return p.key == props.townKey
      })
      currentDistricts = town.distritoS.map((ds) => {
        return {
          number: ds,
          name: mvcdb.distritosS.find((d) => {
            return d.number === ds
          }).name,
          candidates: mvcdb.candidatxs.filter((c) => {
            return c.distritoS === ds && c.pueblo === null
          }),
        }
      })
    } else if (props.districtNumber && props.districtNumber != '') {
      currentDistricts = {
        number: props.districtNumber,
        name: mvcdb.distritosS.find((d) => {
          return d.number === props.districtNumber
        }).name,
        candidates: mvcdb.candidatxs
          .filter((c) => {
            return c.distritoS === props.districtNumber && c.pueblo === null
          })
          .map((i) => {
            return { key: i.key }
          }),
      }
      currentDistricts = [currentDistricts]
    }

    this.state = {
      isTownScope: props.townKey != null,
      displayHeader: props.displayHeader,
      currentDistricts: currentDistricts,
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <View>
          {this.state.currentDistricts.map((d, i) => {
            return (
              <View key={`vcd-${i}`}>
                {this.state.displayHeader && (
                  <View>
                    <View key={`vst-${i}`} style={styles.separator} />
                    <Text
                      key={`dst-${i}`}
                      style={styles.head}
                    >{`Distrito Senatorial ${d.name}`}</Text>
                  </View>
                )}

                <View key={`vst-${i}`} style={styles.separator} />

                {d.candidates.map((c, i) => {
                  return <CandiTile key={i} candidateKey={c.key} />
                })}
                {i == 0 && this.state.currentDistricts.length > 1 && (
                  <View style={styles.space} />
                )}
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

DistrictInfo.propTypes = {
  townKey: PropTypes.string,
  districtNumber: PropTypes.number,
  displayHeader: PropTypes.bool,
}

DistrictInfo.defaultProps = {
  townKey: '',
  districtNumber: -1,
  displayHeader: true,
}
