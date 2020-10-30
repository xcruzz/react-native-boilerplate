import AButton from '../../components/ALugaroButton'
import React from 'react'
import { Svg, Path, G } from 'react-native-svg'
import { colors, images, fonts } from 'theme'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
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
    transform: [{ rotate: orientation }],
  },
  foot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceSize.width,
    height: deviceSize.height * 0.085,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  onePicker: {
    flex: 1,
    width: 240,
    height: 40,
    backgroundColor: colors.victoryGold,
  },
  onePickerItem: {
    flex: 0,
    height: deviceSize.height * 0.07,
    color: colors.white,
    fontFamily: fonts.NeuePlak.Black,
    fontSize: deviceSize.height > 800 ? 28 : 20,
  },
  onePickerItemLabel: {
    flex: 0,
    marginTop: 5,
    marginBottom: 7,
    color: colors.white,
    fontFamily: fonts.NeuePlak.Black,
    fontSize: 25,
  },
  separatorU: {
    flex: 0,
    alignSelf: 'center',
    height: 2,
    width: '65%',
    backgroundColor: colors.victoryGold,
  },
  separator: {
    flex: 0,
    alignSelf: 'center',
    height: 2,
    width: '65%',
    backgroundColor: colors.victoryGold,
    marginTop: Platform.OS !== 'ios' ? 0 : deviceSize.height > 800 ? 60 : 50,
    marginBottom: deviceSize.height < 800 ? 15 : 0,
  },
  headerImg: {
    marginVertical: 12,
    alignSelf: 'center',
    width: deviceSize.height * 0.35,
    height: deviceSize.height * 0.35 * 0.28,
  },
  display_lugaro: {
    alignSelf: 'center',
    width: deviceSize.height * 0.08 * 2.2,
    height: deviceSize.height * 0.08,
    marginTop: 2,
  },
})

const tabBarScreenDimensions = {
  x: (deviceSize.height > 800 ? 320 : 265) + (Platform.OS !== 'ios' ? 10 : 0),
  y: -125,
  scale: deviceSize.height > 800 ? 2.75 : 2.35,
  width:
    (Platform.OS !== 'ios' ? 40 : 0) +
    deviceSize.width * (deviceSize.height > 800 ? 2.36 : 2),
  height: deviceSize.width * 2.36 + 0.4,
  scrollOffSet: 100,
}

const dim = tabBarScreenDimensions

const defaultTown = 'Presiona un Pueblo'

export default class SVGMap extends React.Component {
  updateSelection(key) {
    if (key == this.state.selectedTownK) return
    let towns = this.state.towns
    towns.map((t) => {
      t.activeFill = this.state.gTownFill
    })

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
      selectedTownName: key != defaultTown ? towns[newIndex].name : key,
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
      selectedTownName: defaultTown,
      selectedTownN: defaultTown,
      gTownFill: colors.black,
      gTownActiveFill: colors.victoryGold,
      gTownActiveOutline: colors.victoryGold,
      gTownOutline: colors.white,
      gStrokeWidth: '.01',
      gTransform: '0.0 0.0',
    }
    this.state.towns.map((t) => {
      t.activeFill = this.state.gTownFill
    })
  }

  render() {
    let dim = tabBarScreenDimensions

    return (
      <View style={styles.main}>
        <Image style={styles.headerImg} source={images.candidatxsMapHeader} />
        <View style={styles.separatorU} />
        {Platform.OS === 'ios' ? (
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
        ) : (
          <View style={styles.header}>
            <Text style={styles.onePickerItemLabel}>
              {this.state.selectedTownName.toUpperCase()}
            </Text>
          </View>
        )}

        <View style={styles.separator} />
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
                      if (town.distritoS !== null)
                        this.updateSelection(town.key, i)
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
