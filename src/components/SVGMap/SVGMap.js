import AButton from '../../components/ALugaroButton'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Svg, Path, G } from 'react-native-svg'
import { colors } from 'theme'
import prtowns from '../../../assets/candidatxs/PRTowns.json'
import { Dimensions, View, Text } from 'react-native'
import { Picker } from '@react-native-community/picker'

const deviceSize = Dimensions.get('window')
const styles = globalStyles.mapPage

const fullScreenDimensions = {
  x: 265,
  y: -105,
  scale: 2.25,
  width: deviceSize.height * 0.92,
  height: deviceSize.width * 0.7,
}

const tabBarScreenDimensions = {
  x: 285,
  y: -105,
  scale: 2.2,
  width: deviceSize.height * 0.92,
  height: deviceSize.width * 0.7,
}

const dim = fullScreenDimensions

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
      props: props,
      towns: prtowns.pueblos.sort((a, b) => (a.name > b.name ? 1 : -1)),
      selectedTownI: 1,
      selectedTownK: defaultTown,
      selectedTownN: defaultTown,
      gTownFill: colors.black,
      gTownActiveFill: colors.white,
      gTownOutline: colors.white,
      gStrokeWidth: '.11',
      gTransform: '0.0 0.0',
    }
  }

  render() {
    let dim = tabBarScreenDimensions

    return (
      <View style={styles.main}>
        <Text></Text>
        <View style={styles.foot}>
          <Picker
            style={styles.onePicker}
            itemStyle={styles.onePickerItem}
            selectedValue={this.state.selectedTownK}
            onValueChange={(val, i) => {
              this.updateSelection(val, i + 1)
            }}
          >
            <Picker.Item
              label="Lista de Pueblos"
              value={defaultTown}
              key={defaultTown}
            />
            {this.state.towns.map((town, i) => {
              if (town.name)
                return (
                  <Picker.Item
                    label={town.name}
                    value={town.key}
                    key={town.key}
                  />
                )
            })}
          </Picker>
        </View>
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
                    this.updateSelection(town.key, i)
                  }}
                >
                  <Path id={town.key} d={town.d} />
                </G>
              )
            })}
          </Svg>
        </View>
        <View style={styles.foot}>
          <AButton
            title="Regresar"
            onPressNavigate={this.state.props.pNavigation}
            navigationProps={{
              to: 'ALugaro',
              from: 'Map',
            }}
          />
          <AButton
            title={this.state.selectedTownN}
            onPressNavigate={this.state.props.pNavigation}
            isDisabled={this.state.selectedTownK == defaultTown}
            navigationProps={{
              to: 'Candidaturas',
              from: 'Map',
              townKey: this.state.selectedTownK,
            }}
            width={200}
          />
        </View>
        <Text></Text>
      </View>
    )
  }
}
