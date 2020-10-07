import AButton from '../../components/ALugaroButton'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Svg, Path, G } from 'react-native-svg'
import { colors, images, fonts } from 'theme'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Picker } from '@react-native-community/picker'
import { ScrollView } from 'react-native-gesture-handler'
const orientation = '0deg'
const deviceSize = Dimensions.get('window')
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.black,
    transform: [{ rotate: orientation }],
  },
  foot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceSize.width,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 0,
    alignItems: 'center',
  },
  onePicker: {
    width: 240,
    height: 56,
  },
  onePickerItem: {
    height: 55,
    color: colors.white,
    fontFamily: fonts.NeuePlak.Black,
    fontSize: 28,
  },
  separator: {
    alignSelf: 'center',
    height: 2,
    width: '65%',
    backgroundColor: colors.victoryGold,
    marginTop: 5,
  },
  headerImg: {
    marginVertical: 20,
    alignSelf: 'center',
    width: deviceSize.width * 0.6,
    height: deviceSize.width * 0.6 * 0.735,
  },
  display_lugaro: {
    alignSelf: 'center',
    width: 150,
    height: 68,
    marginTop: 25,
  },
})

const fullScreenDimensions = {
  x: 265,
  y: -105,
  scale: 2.25,
  width: deviceSize.height * 0.92,
  height: deviceSize.width * 0.7,
  scrollOffSet: 0,
}

const tabBarScreenDimensions = {
  x: 265,
  y: -105,
  scale: 2.35,
  width: deviceSize.height * 0.92,
  height: deviceSize.width * 0.7,
  scrollOffSet: 100,
}

const dim = tabBarScreenDimensions

const defaultTown = 'Presiona un Pueblo'

export default class SVGMap extends React.Component {
  updateSelection(key) {
    if (key == this.state.selectedTownK) return
    let towns = this.state.towns
    if (this.state.selectedTownK != defaultTown) {
      towns.map((t) => {
        if (t.key == this.state.selectedTownK) {
          t.activeFill = this.state.gTownFill
        }
      })
    }

    let newIndex = 1
    if (key != defaultTown) {
      newIndex = towns
        .map((t, i) => {
          if (t.key == key) {
            t.activeFill = this.state.gTownActiveFill
            return i
          }
        })
        .find((x) => {
          return x != null
        })
    }
    this.setState({
      ...this.state,
      towns: towns,
      selectedTownI: key != defaultTown ? newIndex : 0,
      selectedTownK: key,
      selectedTownN: key != defaultTown ? `Ver ${towns[newIndex].name}` : key,
    })

    return
  }
  constructor(props) {
    super(props)
    this.state = {
      navigation: props.navigation,
      towns: mvcdb.pueblos.sort((a, b) => (a.name > b.name ? 1 : -1)),
      selectedTownI: 1,
      selectedTownK: defaultTown,
      selectedTownN: defaultTown,
      gTownFill: colors.black,
      gTownActiveFill: colors.victoryGold,
      gTownActiveOutline: colors.victoryGold,
      gTownOutline: colors.white,
      gStrokeWidth: '.01',
      gTransform: '0.0 0.0',
    }
  }

  render() {
    let dim = tabBarScreenDimensions

    return (
      <View style={styles.main}>
        <View style={{ height: 25 }} />
        <Image style={styles.headerImg} source={images.candidatxsMapHeader} />
        <Image style={styles.separator} source={images.ySeprator} />
        <View style={styles.header}>
          <Picker
            style={styles.onePicker}
            itemStyle={styles.onePickerItem}
            selectedValue={this.state.selectedTownK}
            onValueChange={(val, i) => {
              this.updateSelection(val, i + 1)
            }}
          >
            <Picker.Item
              label="MUNICIPIO"
              value={defaultTown}
              key={defaultTown}
            />
            {this.state.towns.map((town, i) => {
              if (town.name)
                return (
                  <Picker.Item
                    label={town.name.toUpperCase()}
                    value={town.key}
                    key={town.key}
                  />
                )
            })}
          </Picker>
        </View>
        <Image style={styles.separator} source={images.ySeprator} />
        <Text />
        <ScrollView
          horizontal={true}
          initialListSize={0}
          contentOffset={{ x: dim.scrollOffSet }}
        >
          <View>
            <Svg width={dim.width} height={dim.height}>
              {this.state.towns.map((town, i) => {
                return (
                  <G
                    transform={`translate(${this.state.gTransform})`}
                    stroke={this.state.gTownOutline}
                    stroke-width={this.state.gStrokeWidth * 0.01}
                    fill={this.state.towns[i].activeFill}
                    x={dim.x}
                    y={dim.y}
                    scale={dim.scale}
                    key={town.key}
                    onPressIn={() => {
                      if (town.distritoS !== null) {
                        console.log(town)
                        this.updateSelection(town.key, i)
                      } else {
                        console.log(town.key)
                      }
                    }}
                  >
                    <Path id={town.key} d={town.d} />
                  </G>
                )
              })}
            </Svg>
          </View>
        </ScrollView>

        <View style={styles.foot}>
          <AButton
            title="Regresar"
            onPressNavigate={this.state.navigation}
            navigationProps={{
              to: 'ALugaro',
              from: 'Map',
            }}
          />
          <AButton
            title={this.state.selectedTownN}
            onPressNavigate={this.state.navigation}
            isDisabled={this.state.selectedTownK == defaultTown}
            navigationProps={{
              to: 'Candidaturas',
              from: 'Map',
              townKey: this.state.selectedTownK,
            }}
            width={200}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                ...this.state,
                isModalActive: true,
                loading: false,
              })
            }}
          >
            <Image style={styles.display_lugaro} source={images.alugaro_2020} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 25 }} />
      </View>
    )
  }
}
