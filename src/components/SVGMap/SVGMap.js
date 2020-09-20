import globalStyles from '../../theme/styles'
import React from 'react'
import { Svg, Path, G } from 'react-native-svg'
import { colors } from 'theme'
import prtowns from './PRTowns.json'
import { Dimensions, View, Button, Text } from 'react-native'
import { Picker } from '@react-native-community/picker'

const deviceSize = Dimensions.get('window')
const styles = globalStyles.svgMap

export default class SVGMap extends React.Component {
  updateSelection(i) {
    let towns = this.state.towns
    let oTown = 'default'

    if (this.state.selectedTownI >= 0) {
      //turn off original town
      oTown = this.state.towns[this.state.selectedTownI]
      oTown.activeFill = colors.black
      towns[this.state.selectedTownI] = oTown
    }
    if (i >= 0) towns[i].activeFill = colors.white

    this.setState({
      ...this.state,
      towns: towns,
      selectedTownK: i >= 0 ? towns[i].key : 'default',
      selectedTownN: i >= 0 ? 'Ver Candidatos' : '',
    })

    return
  }
  constructor(props) {
    super(props)
    this.state = {
      props: props,
      modalVisible: false,
      selectedImageUri: null,
      isDragging: false,
      towns: prtowns.sort((a, b) => (a.name > b.name ? 1 : -1)),
      selectedTownI: -1,
      selectedTownK: 'default',
      selectedTownN: '',
      gTownFill: colors.black,
      gTownActiveFill: colors.white,
      gTownOutline: colors.white,
      gStrokeWidth: '.11',
      gTransform: '0.0 0.0',
      canvasBGColor: colors.black,
      viewBGColor: colors.black,
      modalVisible: false,
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles}>
          <Svg
            style={styles.canvas}
            width={deviceSize.height * 0.8}
            height={deviceSize.width * 0.8}
          >
            {this.state.towns.map((town, i) => {
              return (
                <G
                  transform={`translate(${this.state.gTransform})`}
                  stroke={this.state.gTownOutline}
                  stroke-width={this.state.gStrokeWidth * 0.01}
                  fill={this.state.towns[i].activeFill}
                  x={233}
                  y={-65}
                  scale={2.09}
                  key={town.key}
                  onPressIn={() => {
                    this.updateSelection(i)
                  }}
                >
                  <Path id={town.key} d={town.d} />
                </G>
              )
            })}
          </Svg>
        </View>

        <View style={styles.foot}>
          <Button
            title={'Inicio'}
            color="white"
            onPress={() => {
              this.state.props.pNavigation.navigate('Home', {
                from: 'Map',
              })
            }}
          />
          <Picker
            style={styles.onePicker}
            itemStyle={styles.onePickerItem}
            selectedValue={this.state.selectedTownK}
            onValueChange={(val, i) => {
              // if (val == 'default') {
              this.setState({
                ...this.state,
                selectedTownI: val == 'default' ? -1 : i,
                // selectedTownK: val,
              })
              //} else {
              // this.setState({
              //   ...this.state,
              //   selectedTownI: i,
              //   // selectedTownK: val,
              // })
              // }
              this.updateSelection(this.state.selectedTownI)
            }}
          >
            <Picker.Item
              label="Lista de Pueblos"
              value="default"
              key="default"
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

          <Button
            title={this.state.selectedTownN}
            color="white"
            disabled={this.state.selectedTownI < 0}
            onPress={() => {
              this.state.props.pNavigation.navigate('Details', {
                from: 'Map',
                articleKey:
                  this.state.selectedTownI >= 0
                    ? this.state.towns[this.state.selectedTownI].key
                    : '',
                isTown: true,
              })
            }}
          />
        </View>
      </View>
    )
  }
}
