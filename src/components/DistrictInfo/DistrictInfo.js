import CandiTile from '../CandiTile'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import { colors } from 'theme'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  root: {
    flex: 0,
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 9,
    backgroundColor: colors.white,
  },
  column: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 9,
    backgroundColor: 'purple',
  },
  head: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
    marginVertical: 10,
  },
  verb: {
    color: '#000',
    //fontFamily: 'HelveticaNeue-Light',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 7,
  },
  separator: {
    alignSelf: 'center',
    height: 2,
    width: '100%',
    backgroundColor: colors.victoryGold,
  },
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
        <View style={styles.root}>
          {this.state.currentDistricts.map((d, i) => {
            return (
              <View key={`vcd-${i}`}>
                {this.state.displayHeader && (
                  <Text
                    key={`dst-${i}`}
                    style={styles.head}
                  >{`Distrito Senatorial ${d.name}`}</Text>
                )}
                <View key={`vst-${i}`} style={styles.separator} />
                {d.candidates.map((c, i) => {
                  return <CandiTile key={i} candidateKey={c.key} />
                })}
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
