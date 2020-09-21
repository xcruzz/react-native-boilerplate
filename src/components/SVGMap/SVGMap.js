import AButton from '../../components/ALugaroButton'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Svg, Path, G } from 'react-native-svg'
import { colors } from 'theme'
import prtowns from './PRTowns.json'
import { Dimensions, View, Button, Text } from 'react-native'
import { Picker } from '@react-native-community/picker'

const deviceSize = Dimensions.get('window')
const styles = globalStyles.mapPage
const x = 265
const y = -105
const scale = 2.25
const width = deviceSize.height * 0.92
const height = deviceSize.width * 0.7
const defaultTown = 'Presiona un Pueblo'

export default class SVGMap extends React.Component {
  updateSelection(val, i) {
    let towns = this.state.towns
    let oTown = defaultTown

    if (this.state.selectedTownI > 0) {
      //turn off original town
      oTown = this.state.towns[this.state.selectedTownI]
      oTown.activeFill = this.state.gTownFill
      towns[this.state.selectedTownI] = oTown
    }
    if (i > 0) towns[i].activeFill = this.state.gTownActiveFill

    this.setState({
      ...this.state,
      towns: towns,
      selectedTownI: i,
      selectedTownK: val != defaultTown ? towns[i].key : val,
      selectedTownN: val != defaultTown ? `Ver ${towns[i].name}` : val,
    })

    return
  }
  constructor(props) {
    super(props)
    this.state = {
      props: props,
      towns: prtowns.sort((a, b) => (a.name > b.name ? 1 : -1)),
      selectedTownI: 0,
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
          <Svg width={width} height={height}>
            {this.state.towns.map((town, i) => {
              return (
                <G
                  transform={`translate(${this.state.gTransform})`}
                  stroke={this.state.gTownOutline}
                  stroke-width={this.state.gStrokeWidth * 0.01}
                  fill={this.state.towns[i].activeFill}
                  x={x}
                  y={y}
                  scale={scale}
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
              to: 'Home',
              from: 'Map',
            }}
          />
          <AButton
            title={this.state.selectedTownN}
            onPressNavigate={this.state.props.pNavigation}
            isDisabled={this.state.selectedTownK == defaultTown}
            navigationProps={{
              to: 'Details',
              from: 'Map',
              isTown: true,
              articleKey: this.state.selectedTownK,
            }}
          />
        </View>
        <Text></Text>
      </View>
    )
  }
}
